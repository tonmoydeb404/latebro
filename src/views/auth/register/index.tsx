import RegisterForm from "./sections/form";

type Props = {};

const AuthRegisterView = (props: Props) => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <RegisterForm />
    </div>
  );
};

export default AuthRegisterView;
