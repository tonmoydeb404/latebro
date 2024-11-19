import { RHFTextField } from "@/components/common/rhf";
import Link from "next/link";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="email" label="Email" />
      <RHFTextField
        name="password"
        label="Password"
        labelEnd={
          <Link href="#" className="ml-auto inline-block text-sm underline">
            Forgot your password?
          </Link>
        }
      />
    </>
  );
};

export default Fields;
