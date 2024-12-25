import {
  RHFPhotoField,
  RHFTextareaField,
  RHFTextField,
} from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFPhotoField name="avatar" label="Avatar URL" />
      <RHFTextField name="name" label="Name" />
      <RHFTextField name="profession" label="Profession" />
      <RHFTextareaField name="bio" label="Bio" />
    </>
  );
};

export default Fields;
