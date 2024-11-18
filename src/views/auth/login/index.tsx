import LoginForm from "./sections/form";

type Props = {};

const AuthLoginView = (props: Props) => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm />
    </div>
  );
};

export default AuthLoginView;
