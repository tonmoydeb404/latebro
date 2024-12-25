"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

type Props = ThemeProviderProps;

const ThemeProvider = (props: Props) => {
  const { children, ...others } = props;
  return <NextThemesProvider {...others}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
