import { RHFTextareaField, RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="avatar" label="Avatar URL" />
      <RHFTextField name="name" label="Name" />
      <RHFTextField name="profession" label="Profession" />
      <RHFTextareaField name="bio" label="Bio" />
    </>
  );
};

export default Fields;
