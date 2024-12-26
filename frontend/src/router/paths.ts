import { matchRoute } from "./helper";

export const paths = {
  home: "/",
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
  resumes: {
    root: "/resumes",
    editor: "/resumes/editor",
  },
};

// routes that require authentication ----------------------------------------------------------------------
export const protectedRoutes = ["/resumes/editor"];
export function isProtectedRoute(path: string) {
  return protectedRoutes.some((route) => matchRoute(route, path));
}

// routes that only for unauthenticated ----------------------------------------------------------------------
export const guestRoutes = ["/auth/login", "/auth/register"];
export function isGuestRoute(path: string) {
  return guestRoutes.some((route) => matchRoute(route, path));
}
