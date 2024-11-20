import { RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="instituteName" label="Institute Name" />
      <RHFTextField name="description" label="Description" />
      <RHFTextField name="startDate" label="Start Date" />
      <RHFTextField name="endDate" label="End Date" />
      <RHFTextField name="subject" label="Subject" />
    </>
  );
};

export default Fields;
