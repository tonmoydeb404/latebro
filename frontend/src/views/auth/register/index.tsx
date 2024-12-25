import { Suspense } from "react";
import RegisterForm from "./sections/form";

type Props = {};

const AuthRegisterView = (props: Props) => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Suspense>
        <RegisterForm />
      </Suspense>
    </div>
  );
};

export default AuthRegisterView;
