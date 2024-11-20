"use client";

import React, { ReactNode, useEffect } from "react";
import { useLazyRefreshQuery } from "./api";

type Props = {
  children: ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [refresh] = useLazyRefreshQuery();

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
