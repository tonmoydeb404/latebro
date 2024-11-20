import { RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="title" label="Skill Title" />
      <RHFTextField name="experience" label="Experience" />
    </>
  );
};

export default Fields;
