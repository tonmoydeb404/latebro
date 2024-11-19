import ThemeProvider from "@/providers/theme-provider";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = (props: Props) => {
  const { children } = props;
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
