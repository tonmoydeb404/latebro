import { RHFSelectField, RHFTextField } from "@/components/common/rhf";
import { skillExperiences } from "@/constants/resume";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFTextField name="title" label="Skill Title" />
      <RHFSelectField
        name="experience"
        label="Experience"
        options={Object.entries(skillExperiences).map(([key, value]) => ({
          value: key,
          label: value,
        }))}
      />
    </>
  );
};

export default Fields;
