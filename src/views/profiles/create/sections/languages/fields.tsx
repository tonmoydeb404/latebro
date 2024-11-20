import { RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="title" label="Language" />
      <RHFTextField name="experience" label="Experience" />
    </>
  );
};

export default Fields;
