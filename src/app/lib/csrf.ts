// lib/csrf.ts
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function validateCsrfToken(request: NextRequest): Promise<boolean> {
  const cookieToken = (await cookies()).get('csrf-token')?.value;
  const formToken = request.headers.get('x-csrf-token');
  
  if (!cookieToken || !formToken) {
    return false;
  }
  
  return cookieToken === formToken;
}