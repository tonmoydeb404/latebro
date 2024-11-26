import { debounce } from "@/utils/debounce";
import { LucideLoader2 } from "lucide-react";
import { memo, useCallback } from "react";

import { useFormContext, useWatch } from "react-hook-form";
import useDeepCompareEffect from "use-deep-compare-effect";

const AutoSave = memo(({ defaultValues, onSubmit }: Props) => {
  // Get the closest form methods
  const methods = useFormContext();

  // Save if this function is called and then not called again within 1000ms
  // eslint-disable-next-line
  const debouncedSave = useCallback(
    debounce(() => {
      methods.handleSubmit(onSubmit)();
    }, 1000),
    [onSubmit]
  );

  // Watch all the data, provide with defaultValues from server, this way we know if the new data came from server or where actually edited by user
  const watchedData = useWatch({
    control: methods.control,
    defaultValue: defaultValues,
  });

  useDeepCompareEffect(() => {
    console.log("Triggered");
    if (methods.formState.isDirty) {
      debouncedSave();
    }
  }, [watchedData]);

  return (
    <div>
      {methods.formState.isSubmitting && (
        <LucideLoader2 size={20} className="animate-spin" />
      )}
    </div>
  );
});

AutoSave.displayName = "AutoSave";

type Props = {
  defaultValues: any;
  onSubmit: any;
};

export default AutoSave;
