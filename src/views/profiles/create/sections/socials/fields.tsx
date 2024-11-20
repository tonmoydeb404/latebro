import { RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="type" label="Social Type" />
      <RHFTextField name="title" label="Title" />
      <RHFTextField name="url" label="URL" />
    </>
  );
};

export default Fields;
