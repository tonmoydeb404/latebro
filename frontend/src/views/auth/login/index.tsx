import { Suspense } from "react";
import LoginForm from "./sections/form";

type Props = {};

const AuthLoginView = (props: Props) => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default AuthLoginView;
