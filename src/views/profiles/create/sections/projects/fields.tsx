import { RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="name" label="Project Name" />
      <RHFTextField name="description" label="Description" />
      <RHFTextField name="previewLink" label="Preview Link" />
      <RHFTextField name="sourceLink" label="Source Link" />
      <RHFTextField name="caseStudyLink" label="Case Study Link" />
      <RHFTextField name="tools" label="Tools" />
    </>
  );
};

export default Fields;
