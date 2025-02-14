import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authToken } from "./constants/cookies";
import { guestRoutes, paths, protectedRoutes } from "./router/paths";

// ----------------------------------------------------------------------

export function middleware(request: NextRequest) {
  const token = request.cookies.get(authToken)?.value;
  // console.log("token:", token);

  const isGuestPath = guestRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isGuestPath && token) {
    return NextResponse.redirect(new URL(paths.resumes.root, request.url));
  }

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    const url = new URL("/auth/login", request.url);
    const redirectUrl = `${request.nextUrl.pathname}${request.nextUrl.search}`;

    url.searchParams.set("redirect", redirectUrl);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// ----------------------------------------------------------------------

export const config = {
  matcher: [
    // Protected routes ----------------------------------------------------------------------
    "/resumes/:path*",
    // Guest routes ----------------------------------------------------------------------
    "/auth/login",
    "/auth/register",
  ],
};
