import { RHFForm } from "@/components/common/rhf";
import { Button } from "@/components/ui/button";
import { setTheme } from "@/store/features/editor/slice";
import { useAppDispatch, useEditor } from "@/store/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucideEdit } from "lucide-react";
import { useCallback, useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../../common/header";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {};

const ThemeForm = (props: Props) => {
  const { theme } = useEditor();
  const dispatch = useAppDispatch();

  // ----------------------------------------------------------------------

  const defaultValues = useMemo<SchemaType>(
    () => ({
      background: theme?.background || "",
      foreground: theme?.foreground || "",
      muted: theme?.muted || "",
      primary: theme?.primary || "",
      secondary: theme?.secondary || "",
    }),
    [theme]
  );
  const formOptions = useForm({ resolver: zodResolver(schema), defaultValues });

  const onValid: SubmitHandler<SchemaType> = useCallback(
    async (values) => {
      dispatch(setTheme(values));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // ----------------------------------------------------------------------

  useEffect(() => {
    formOptions.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  return (
    <RHFForm formOptions={formOptions} onValid={onValid}>
      <Header
        title="Theme Configurations"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
        className="mb-10"
      />

      <div className="flex flex-col gap-4 mb-10">
        <Fields />
      </div>
      <div className="flex items-center">
        <Button Icon={LucideEdit} type="submit">
          Update
        </Button>
        {/* <AutoSave defaultValues={defaultValues} onSubmit={onValid} /> */}
      </div>
    </RHFForm>
  );
};

export default ThemeForm;
