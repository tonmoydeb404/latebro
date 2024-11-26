import {
  RHFTagInput,
  RHFTextareaField,
  RHFTextField,
} from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-4 mb-10">
        <RHFTextField name="name" label="Project Name" />
        <RHFTextareaField name="description" label="Description" />
        <RHFTagInput name="tools" label="Tools" />
      </div>

      <div className="flex flex-col gap-4 mb-10">
        <RHFTextField name="previewUrl" label="Preview Link" />
        <RHFTextField name="sourceUrl" label="Source Link" />
        <RHFTextField name="caseStudyUrl" label="Case Study Link" />
      </div>
    </div>
  );
};

export default Fields;
