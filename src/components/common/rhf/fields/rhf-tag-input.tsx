import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LucidePlus, LucideX } from "lucide-react";
import { ReactNode, useCallback, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { EmptyState } from "../../state";

type Props = {
  name: string;
  label?: string;
  labelPrev?: ReactNode;
  labelEnd?: ReactNode;
  description?: string;
} & React.ComponentProps<"input">;

type TagItem = {
  text: string;
};

type FieldValues = Record<string, TagItem[]>;

const RHFTagField = (props: Props) => {
  const { name, label, description, labelEnd, labelPrev, ...other } = props;
  const form = useFormContext<FieldValues>();
  const { control } = form;
  const { fields, append, remove } = useFieldArray<FieldValues>({
    control,
    name,
  });

  const [state, setState] = useState("");

  const addNew = useCallback(() => {
    if (!state || !state.trim()) return;

    append({ text: state });
    setState("");
  }, [append, state]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center">
            {labelPrev}
            <FormLabel>{label}</FormLabel>
            {labelEnd}
          </div>
          <FormControl>
            <div className="flex items-center gap-2">
              <Input
                value={state}
                onChange={(e) => setState(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key.toLowerCase() === "enter") {
                    e.preventDefault();
                    addNew();
                  }
                }}
                {...other}
              />
              <Button size={"icon"} onClick={addNew} type="button">
                <LucidePlus size={18} />
              </Button>
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />

          {fields.length > 0 && (
            <div className="flex items-center border p-3 border-dashed gap-1 flex-wrap">
              {fields.map((field, index) => (
                <Badge variant={"outline"} key={field.id}>
                  {field.text}
                  <button
                    onClick={() => remove(index)}
                    className="ml-1 text-destructive"
                  >
                    <LucideX size={12} />
                  </button>
                </Badge>
              ))}
            </div>
          )}

          {fields.length === 0 && <EmptyState />}
        </FormItem>
      )}
    />
  );
};

export default RHFTagField;
