import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  // Check if the path is public
  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail';
  // Check if the path starts with /profile, indicating it's a profile page or a sub-page
  const isProfilePath = path.startsWith('/profile');

  const token = request.cookies.get("token");

  // If accessing a public path with a token, or trying to access /profile without a token, redirect appropriately
  if (isPublicPath && token) {
    // User is logged in but trying to access a public page, redirect to home
    return NextResponse.redirect(new URL('/', request.nextUrl));
  } else if (isProfilePath && !token) {
    // User is not logged in but trying to access a protected page, redirect to login
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
  // Optionally, you can handle other cases here as needed
}

// Configuration remains the same, ensuring the middleware runs for the specified paths
export const config = {
  matcher: [
    '/',        
    '/login',
    '/signup',
    '/profile', // This will include the base path and implicitly apply to sub-paths
    '/profile/:path*' // Explicitly defining pattern for sub-paths
  ]
};
