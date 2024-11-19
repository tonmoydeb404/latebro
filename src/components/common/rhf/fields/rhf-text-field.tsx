import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label?: string;
  labelPrev?: ReactNode;
  labelEnd?: ReactNode;
  description?: string;
};

const RHFTextField = (props: Props) => {
  const { name, label, description, labelEnd, labelPrev } = props;
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
            <Input {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFTextField;
