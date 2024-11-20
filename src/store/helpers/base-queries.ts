import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const backendBaseQuery = (url: string) =>
  fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND}${url}`,
    credentials: "include", // Ensures cookies are sent with every request
  });
