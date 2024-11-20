import { RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="phone" label="Phone" />
      <RHFTextField name="email" label="Email" />
      <RHFTextField name="address" label="Address" />
      <RHFTextField name="addressLink" label="Address Link" />
      <RHFTextField name="website" label="Website" />
    </>
  );
};

export default Fields;
