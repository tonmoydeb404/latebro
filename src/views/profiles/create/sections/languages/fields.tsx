import { RHFSelectField, RHFTextField } from "@/components/common/rhf";
import { languageExperiences } from "@/constants/resume";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="title" label="Language" />
      <RHFSelectField
        name="experience"
        label="Experience"
        options={Object.entries(languageExperiences).map(([key, value]) => ({
          value: key,
          label: value,
        }))}
      />
    </>
  );
};

export default Fields;
