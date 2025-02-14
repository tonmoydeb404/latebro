import { authToken } from "@/constants/cookies";
import { decodeJWT } from "@/helpers/jwt";
import { AuthPaylod } from "@/types/api/auth";
import { deleteCookie, getCookie, setCookie } from "cookies-next/client";

export const setAuthToken = async (token: string) => {
  const payload = decodeJWT<AuthPaylod>(token);

  if (!payload?.exp) return;

  setCookie(authToken, token, {
    path: "/",
    maxAge: payload.exp * 1000,
    httpOnly: false,
  });
};

export const removeAuthToken = async () => {
  deleteCookie(authToken);
};

export const getAuthToken = () => {
  return getCookie(authToken);
};
