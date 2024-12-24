import { RHFColorField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <>
      <RHFColorField label="Background" name="background" />
      <RHFColorField label="Foreground" name="foreground" />
      <RHFColorField label="Secondary" name="secondary" />
      <RHFColorField label="Primary" name="primary" />
      <RHFColorField label="muted" name="muted" />
    </>
  );
};

export default Fields;
