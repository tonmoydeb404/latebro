import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label?: string;
  labelPrev?: ReactNode;
  labelEnd?: ReactNode;
  description?: string;
} & React.ComponentProps<"textarea">;

const RHFTextareaField = (props: Props) => {
  const { name, label, description, labelEnd, labelPrev, ...others } = props;
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
            <Textarea {...field} {...others} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFTextareaField;
