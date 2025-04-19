import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { corsHeaders } from '../../lib/services/utils/cors';
import { EmailRequestSchema } from '../../lib/services/utils/validation';
import { ZodError } from 'zod';
import { sendEmail } from '@/app/lib/services/mailgun';
import { validateCsrfToken } from '../../lib/csrf';


export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: NextRequest) {

  // Validate CSRF token
  if (!validateCsrfToken(request)) {
    return NextResponse.json(
      { error: 'Invalid CSRF token' },
      { status: 403 }
    );
  }

  try {
    // Extract form data
    const body = await request.json();

    // Validate form data using Zod schema
    const validatedData = EmailRequestSchema.parse(body);

    await sendEmail(validatedData);
    
    // Return success response
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { headers: corsHeaders }
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof ZodError) {
      const formattedErrors = error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }));
      
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: formattedErrors },
        { status: 400, headers: corsHeaders }
      );
    }
    
    // Log detailed error for debugging
    console.error('Email sending failed:', error);
    console.error('Detailed error:', JSON.stringify(error, null, 2));
    
    // Return appropriate error response
    return NextResponse.json(
      { 
        success: false,
        message: 'Failed to send email',
        error: process.env.NODE_ENV === 'production' 
          ? 'An unexpected error occurred' 
          : (error as Error).message
      },
      { status: 500, headers: corsHeaders }
    );
  }
}