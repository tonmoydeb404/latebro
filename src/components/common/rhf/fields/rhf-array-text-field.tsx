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
import { LucideTrash } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label?: string;
  description?: string;
  addButtonLabel?: string;
  removeButtonLabel?: string;
};

const RHFArrayTextField = ({
  name,
  label,
  description,
  addButtonLabel = "Add",
}: Props) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <FormItem>
      <div className="flex items-center justify-between">
        <div>
          {label && <FormLabel>{label}</FormLabel>}
          {description && <FormDescription>{description}</FormDescription>}
        </div>

        <Button
          type="button"
          size="sm"
          variant={"secondary"}
          onClick={() => append("")} // Append an empty string for a new field
        >
          {addButtonLabel}
        </Button>
      </div>
      {fields.map((field, index) => (
        <FormField
          key={field.id}
          control={control}
          name={`${name}.${index}`}
          render={({ field }) => (
            <div className="flex items-center space-x-2">
              <FormControl>
                <Input {...field} />
              </FormControl>
              <Button
                type="button"
                size={"icon"}
                variant="destructive"
                onClick={() => remove(index)}
              >
                <LucideTrash size={18} />
              </Button>
            </div>
          )}
        />
      ))}

      <FormMessage />
    </FormItem>
  );
};

export default RHFArrayTextField;
