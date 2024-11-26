import {
  RHFCheckboxField,
  RHFDateField,
  RHFTextareaField,
  RHFTextField,
} from "@/components/common/rhf";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { SchemaType } from "./schema";

type Props = {};

const Fields = (props: Props) => {
  const formOptions = useFormContext<SchemaType>();
  const { watch, setValue } = formOptions;
  const isCurrent = watch("isCurrent");

  useEffect(() => {
    if (isCurrent) {
      setValue("endedAt", undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCurrent]);

  // ----------------------------------------------------------------------

  return (
    <>
      <RHFTextField name="instituteName" label="Institute Name" />
      <RHFTextField name="subject" label="Subject" />
      <RHFTextareaField name="description" label="Description" />
      <div className="grid grid-cols-2 gap-5">
        <RHFDateField name="startedAt" label="Start Date" />
        <RHFDateField name="endedAt" label="End Date" disabled={isCurrent} />
      </div>
      <RHFCheckboxField name="isCurrent" label="Currently Studying" />
    </>
  );
};

export default Fields;
