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
export const protectedRoutes = ["/resumes/"];

// routes that only for unauthenticated ----------------------------------------------------------------------
export const guestRoutes = ["/auth/login", "/auth/register"];
