import { authToken } from "@/constants/cookies";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next/client";

export const backendBaseQuery = (url: string) => {
  const token = getCookie(authToken);

  return fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND}${url}`,
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : undefined,
  });
};
