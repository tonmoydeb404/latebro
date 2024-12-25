"use client";

import { hasApiError } from "@/helpers/api";
import { guestRoutes, paths } from "@/router/paths";
import React, { ReactNode, useEffect } from "react";
import { useLazyRefreshQuery } from "./api";

type Props = {
  children: ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [refresh] = useLazyRefreshQuery();

  const handleRefresh = async () => {
    try {
      await refresh().unwrap();
    } catch (error) {
      if (hasApiError(error) && error.data.code) {
        const isGuestPath = guestRoutes.includes(window.location.pathname);
        if (!isGuestPath) {
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
