import { Button } from "@/components/ui/button";
import { LucideLock, LucideLockOpen } from "lucide-react";
import { ReactNode, useState } from "react";
import RHFTextField, { RHFTextFieldProps } from "./rhf-text-field";

type Args = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
type Props = Omit<RHFTextFieldProps, "endContent" | "type" | "children"> & {
  children?: (args: Args) => ReactNode;
};

const RHFPasswordField = ({ children, ...props }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <RHFTextField
        {...props}
        type={show ? "text" : "password"}
        endContent={
          <Button
            size={"icon"}
            variant={"ghost"}
            className="size-8"
            onClick={() => setShow((prev) => !prev)}
            type="button"
          >
            {show ? <LucideLockOpen size={18} /> : <LucideLock size={18} />}
          </Button>
        }
      />
      {children ? children({ show, setShow }) : null}
    </>
  );
};

export default RHFPasswordField;
