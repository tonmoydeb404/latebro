import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/providers/theme-provider";
import AuthProvider from "@/store/features/auth/provider";
import StoreProvider from "@/store/provider";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = (props: Props) => {
  const { children } = props;
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <StoreProvider>
        <AuthProvider>{children}</AuthProvider>
      </StoreProvider>
      <Toaster />
    </ThemeProvider>
  );
};

export default Providers;
