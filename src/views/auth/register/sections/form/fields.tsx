import { RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="email" label="Email" />
      <RHFTextField name="password" label="Password" />
      <RHFTextField name="confirmPassword" label="Confirm Password" />
    </>
  );
};

export default Fields;
