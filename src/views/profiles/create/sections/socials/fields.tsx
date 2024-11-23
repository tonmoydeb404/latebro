import { RHFSelectField, RHFTextField } from "@/components/common/rhf";
import { socialTypes } from "@/constants/resume";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="title" label="Title" />
      <RHFTextField name="url" label="URL" />
      <RHFSelectField
        name="type"
        label="Social Type"
        options={Object.entries(socialTypes).map(([key, value]) => ({
          value: key,
          label: value,
        }))}
      />
    </>
  );
};

export default Fields;
