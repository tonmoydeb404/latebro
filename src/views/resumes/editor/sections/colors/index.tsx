import { RHFForm } from "@/components/common/rhf";
import { Button } from "@/components/ui/button";
import { setColors } from "@/store/features/editor/slice";
import { useAppDispatch, useEditor } from "@/store/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucideEdit } from "lucide-react";
import { useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../../common/header";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {};

const ColorsForm = (props: Props) => {
  const { template } = useEditor();
  const dispatch = useAppDispatch();

  // ----------------------------------------------------------------------

  const defaultValues = useMemo<SchemaType>(
    () => ({
      background: template?.theme?.colors?.background || "",
      foreground: template?.theme?.colors?.foreground || "",
      muted: template?.theme?.colors?.muted || "",
      primary: template?.theme?.colors?.primary || "",
      secondary: template?.theme?.colors?.secondary || "",
    }),
    [template?.theme?.colors]
  );
  const formOptions = useForm({ resolver: zodResolver(schema), defaultValues });

  const onValid: SubmitHandler<SchemaType> = async (values) => {
    dispatch(setColors(values));
  };
  const onReset = async () => {
    formOptions.reset(defaultValues);
    dispatch(setColors(defaultValues));
  };

  // ----------------------------------------------------------------------

  useEffect(() => {
    formOptions.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  return (
    <RHFForm formOptions={formOptions} onValid={onValid} onReset={onReset}>
      <Header
        title="Customize Colors"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
        className="mb-10"
      />

      <div className="flex flex-col gap-4 mb-10">
        <Fields />
      </div>
      <div className="flex items-center gap-2">
        <Button Icon={LucideEdit} type="submit">
          Update
        </Button>
        <Button type="reset" variant={"outline"}>
          Reset To Defaults
        </Button>
        {/* <AutoSave defaultValues={defaultValues} onSubmit={onValid} /> */}
      </div>
    </RHFForm>
  );
};

export default ColorsForm;
