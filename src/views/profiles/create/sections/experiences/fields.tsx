import {
  RHFCheckboxField,
  RHFDateField,
  RHFTextareaField,
  RHFTextField,
} from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="companyName" label="Company Name" />
      <RHFTextField name="position" label="Position" />
      <RHFTextareaField name="description" label="Description" />
      <div className="grid grid-cols-2 gap-5">
        <RHFDateField name="startedAt" label="Start Date" />
        <RHFDateField name="endedAt" label="End Date" />
      </div>
      <RHFCheckboxField name="isCurrent" label="Currently Working" />
    </>
  );
};

export default Fields;
