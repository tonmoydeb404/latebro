import {
  RHFPhotoField,
  RHFTextareaField,
  RHFTextField,
} from "@/components/common/rhf";

type Props = {
  onUpload: (url: string) => void;
};

const Fields = (props: Props) => {
  const { onUpload } = props;
  return (
    <>
      <RHFPhotoField name="avatar" label="Avatar URL" onUpload={onUpload} />
      <RHFTextField name="name" label="Name" />
      <RHFTextField name="profession" label="Profession" />
      <RHFTextareaField name="bio" label="Bio" />
    </>
  );
};

export default Fields;
