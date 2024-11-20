import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// routes that require authentication ----------------------------------------------------------------------
const protectedRoutes = ["/profiles"];
// routes that only for unauthenticated ----------------------------------------------------------------------
const guestRoutes = ["/auth/login", "/auth/register"];

// ----------------------------------------------------------------------

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  const isGuestPath = guestRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    const url = new URL("/auth/login", request.url);
    url.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  if (isGuestPath && token) {
    return NextResponse.redirect(new URL("/profiles", request.url));
  }

  return NextResponse.next();
}

// ----------------------------------------------------------------------

export const config = {
  matcher: [
    // Protected routes ----------------------------------------------------------------------
    "/profiles/:path*",
    // Guest routes ----------------------------------------------------------------------
    "/auth/login",
    "/auth/register",
  ],
};
