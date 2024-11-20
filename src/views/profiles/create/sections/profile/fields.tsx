import { RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="avatar" label="Avatar URL" />
      <RHFTextField name="name" label="Name" />
      <RHFTextField name="profession" label="Profession" />
      <RHFTextField name="bio" label="Bio" />
    </>
  );
};

export default Fields;
