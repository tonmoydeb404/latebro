import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label?: string;
  labelPrev?: ReactNode;
  labelEnd?: ReactNode;
  description?: string;
} & CheckboxProps;

const RHFCheckboxField = (props: Props) => {
  const { name, label, description, labelEnd, labelPrev, ...others } = props;
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              {...others}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <div className="flex items-center">
              {labelPrev}
              <FormLabel>{label}</FormLabel>
              {labelEnd}
            </div>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default RHFCheckboxField;
