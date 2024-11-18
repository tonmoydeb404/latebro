import AuthLoginView from "@/views/auth/login";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Login",
};

const AuthLoginPage = (props: Props) => {
  return <AuthLoginView />;
};

export default AuthLoginPage;
