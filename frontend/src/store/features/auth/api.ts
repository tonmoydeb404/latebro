import { removeAuthToken, setAuthToken } from "@/helpers/auth";
import { backendBaseQuery } from "@/store/helpers/base-queries";
import {
  LoginBody,
  LoginResponse,
  RegisterBody,
  RegisterResponse,
} from "@/types/api/auth";
import { createApi } from "@reduxjs/toolkit/query/react";
import { login, logout } from "./slice";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: backendBaseQuery("/auth"),
  endpoints: (build) => ({
    refresh: build.query<LoginResponse, void>({
      query: () => ({
        url: "/refresh",
      }),
      onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          await setAuthToken(data.results.token);

          dispatch(
            login({ user: data.results.user, token: data.results.token })
          );
        } catch (error) {
          dispatch(authApi.endpoints.logout.initiate(undefined));
          // console.error("Refresh API Error: ", error);
        }
      },
    }),
    login: build.mutation<LoginResponse, LoginBody>({
      query: (body) => ({
        url: "/login",
        body: body,
        method: "POST",
      }),
      onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            login({ user: data.results.user, token: data.results.token })
          );
        } catch (error) {
          dispatch(authApi.endpoints.logout.initiate(undefined));
          // console.error("Login API Error: ", error);
        }
      },
    }),
    register: build.mutation<RegisterResponse, RegisterBody>({
      query: (body) => ({
        url: "/register",
        body: body,
        method: "POST",
      }),
      onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            login({ user: data.results.user, token: data.results.token })
          );
        } catch (error) {
          dispatch(authApi.endpoints.logout.initiate(undefined));
          // console.error("Register API Error: ", error);
        }
      },
    }),
    logout: build.mutation<boolean, void>({
      queryFn: async () => {
        try {
          await removeAuthToken();
          return { data: true };
        } catch (error) {
          return { data: false };
        }
      },
      onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;

          dispatch(logout());
        } catch (error) {
          console.error("Logout API Error: ", error);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLazyRefreshQuery,
  useLogoutMutation,
  useRefreshQuery,
} = authApi;
export default authApi;
