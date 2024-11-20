import { RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="companyName" label="Company Name" />
      <RHFTextField name="position" label="Position" />
      <RHFTextField name="description" label="Description" />
      <RHFTextField name="startDate" label="Start Date" />
      <RHFTextField name="endDate" label="End Date" />
    </>
  );
};

export default Fields;
