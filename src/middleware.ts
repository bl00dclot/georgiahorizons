// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/api/:path'],
};

// Store rate limiting data in memory
// Note: This will reset when the server restarts
const ipRequestCounts: Record<string, { count: number, resetTime: number }> = {};

export function middleware(request: NextRequest) {
  console.log('Middleware is running!');
  
  // Only apply rate limiting to POST requests
  if (request.method === 'POST') {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    const windowMs = 60 * 15000; // 1 minute window
    const maxRequests = 1; // 2 requests per minute (comment doesn't match your code)
    const timestamp = new Date().toISOString();
    
    console.log(`[${timestamp}] POST request from IP: ${ip} to ${request.nextUrl.pathname}`);
    
    // Rate limiting logic
    if (!ipRequestCounts[ip] || now > ipRequestCounts[ip].resetTime) {
      ipRequestCounts[ip] = { count: 1, resetTime: now + windowMs };
    } else {
      ipRequestCounts[ip].count++;
    }
    
    console.log(`Request count for ${ip}: ${ipRequestCounts[ip].count}/${maxRequests}`);
    
    // Check if rate limit is exceeded
    if (ipRequestCounts[ip].count > maxRequests) {
      const retryAfter = Math.ceil((ipRequestCounts[ip].resetTime - now) / 1000);
      console.log(`Rate limit exceeded for ${ip}. Retry after: ${retryAfter}s`);
      
      return NextResponse.json(
        { message: 'You can send only one email every 15 minutes!' },
        { 
          status: 429,
          headers: {
            'Retry-After': `${retryAfter}`,
            'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
          }
        }
      );
    }
  }
  
  // Allow the request to continue down the middleware chain

  
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return NextResponse.next();
}