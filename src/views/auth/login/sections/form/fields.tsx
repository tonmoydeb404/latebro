import { RHFPasswordField, RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="email" label="Email" />
      <RHFPasswordField name="password" label="Password" />
    </>
  );
};

export default Fields;
