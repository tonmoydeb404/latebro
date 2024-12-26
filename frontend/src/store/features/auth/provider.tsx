"use client";

import { hasApiError } from "@/helpers/api";
import { getAuthToken } from "@/helpers/auth";
import { isProtectedRoute, paths } from "@/router/paths";
import { useAppDispatch } from "@/store/hooks";
import React, { ReactNode, useEffect } from "react";
import { useLazyRefreshQuery } from "./api";
import { logout } from "./slice";

type Props = {
  children: ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [refresh] = useLazyRefreshQuery();

  const handleRefresh = async () => {
    try {
      const token = getAuthToken();
      if (!token) {
        dispatch(logout());
        return;
      }
      await refresh().unwrap();
    } catch (error) {
      if (hasApiError(error) && error.data.code) {
        if (isProtectedRoute(window.location.pathname)) {
          window.location.href = paths.auth.login;
        }
      }
      console.error("Refresh API Error: ", error);
    }
  };

  useEffect(() => {
    handleRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
