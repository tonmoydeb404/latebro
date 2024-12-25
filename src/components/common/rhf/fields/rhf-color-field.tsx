import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { generateRandomColor } from "@/utils/color";
import { Dices } from "lucide-react";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { ColorPicker } from "../../react-colorful";

export type RHFTextFieldProps = {
  name: string;
  label?: string;
  labelPrev?: ReactNode;
  labelEnd?: ReactNode;
  description?: string;
} & InputProps;

const RHFColorField = (props: RHFTextFieldProps) => {
  const { name, label, description, labelEnd, labelPrev, ...other } = props;
  const form = useFormContext();
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
              <ColorPicker value={field.value} onChange={field.onChange}>
                <div
                  className="size-10 shrink-0 border rounded-md cursor-crosshair"
                  style={{ backgroundColor: field.value }}
                />
              </ColorPicker>
              <Input
                {...field}
                {...other}
                className={cn("flex-1", other.className)}
              />
              <Button
                size={"icon"}
                variant={"outline"}
                type="button"
                onClick={() => field.onChange(generateRandomColor())}
              >
                <Dices />
              </Button>
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFColorField;
