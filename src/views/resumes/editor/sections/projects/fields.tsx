import { RHFArrayTextField, RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="name" label="Project Name" />
      <RHFTextField name="description" label="Description" />
      <RHFTextField name="previewUrl" label="Preview Link" />
      <RHFTextField name="sourceUrl" label="Source Link" />
      <RHFTextField name="caseStudyUrl" label="Case Study Link" />
      <RHFArrayTextField name="tools" label="Tools" />
    </>
  );
};

export default Fields;
