// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/api/:path'],
};

const ipRequestCounts: Record<string, { count: number, resetTime: number }> = {};

export function middleware(request: NextRequest) {
  console.log('Middleware is running!');

  // Only apply rate limiting to POST requests
  if (request.method === 'POST') {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute window
    const maxRequests = 5; // 5 requests per minute
    const timestamp = new Date().toISOString();
    
    console.log(`[${timestamp}] POST request from IP: ${ip} to ${request.nextUrl.pathname}`);
    
    // Rate limiting logic
    if (!ipRequestCounts[ip] || now > ipRequestCounts[ip].resetTime) {
      ipRequestCounts[ip] = { count: 0, resetTime: now + windowMs };
    }
    
    ipRequestCounts[ip].count++;
    
    if (ipRequestCounts[ip].count > maxRequests) {
      return NextResponse.json(
        { error: 'Too many requests, please try again later' },
        { 
          status: 429,
          headers: {
            'Retry-After': `${Math.ceil((ipRequestCounts[ip].resetTime - now) / 1000)}`,
            'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
          }
        }
      );
    }
  }
  
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return response;
}