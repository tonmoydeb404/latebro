import PhotoUploadModal from "@/components/modals/photo-upload";
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
import useModal from "@/hooks/use-modal";
import { cn } from "@/lib/utils";
import { LucideUploadCloud } from "lucide-react";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

export type RHFPhotoFieldProps = {
  name: string;
  label?: string;
  labelPrev?: ReactNode;
  labelEnd?: ReactNode;
  description?: string;
} & InputProps;

const RHFPhotoField = (props: RHFPhotoFieldProps) => {
  const { name, label, description, labelEnd, labelPrev, ...other } = props;
  const form = useFormContext();
  const modal = useModal<any>();

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
                {...field}
                {...other}
                className={cn(other.className, "flex-1")}
              />
              <Button
                size={"icon"}
                variant={"outline"}
                type="button"
                onClick={modal.openModal}
              >
                <LucideUploadCloud />
              </Button>
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
          <PhotoUploadModal
            onClose={modal.closeModal}
            open={modal.isOpen}
            onSuccess={(url) => field.onChange(url)}
          />
        </FormItem>
      )}
    />
  );
};

export default RHFPhotoField;
