import AuthRegisterView from "@/views/auth/register";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Register",
};

const AuthRegisterPage = (props: Props) => {
  return <AuthRegisterView />;
};

export default AuthRegisterPage;
