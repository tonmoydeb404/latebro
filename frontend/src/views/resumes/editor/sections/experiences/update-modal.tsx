import { RHFForm } from "@/components/common/rhf";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { hasApiError } from "@/helpers/api";
import { toast } from "@/hooks/use-toast";
import { useUpdateExperienceMutation } from "@/store/features/resume/experience/api";
import { ResumeExperience } from "@/types/resume";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {
  data: ResumeExperience | null;
  open: boolean;
  onClose: () => void;
};

const UpdateModal = (props: Props) => {
  const { data, onClose, open } = props;
  const [mutate, response] = useUpdateExperienceMutation();

  // ----------------------------------------------------------------------

  const defaultValues = useMemo<SchemaType>(
    () => ({
      endedAt: data?.endedAt ? new Date(data.endedAt) : undefined,
      companyName: data?.companyName || "",
      isCurrent: data?.endedAt ? false : true,
      startedAt: data?.startedAt ? new Date(data.startedAt) : new Date(),
      position: data?.position || "",
      description: data?.description || "",
    }),
    [data]
  );
  const formOptions = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onValid: SubmitHandler<SchemaType> = async (values) => {
    if (!data) return;

    const response = await mutate({
      ...values,
      startedAt: values.startedAt.toISOString(),
      endedAt: values.endedAt ? values.endedAt.toISOString() : null,
      resume: data.resume,
      _id: data._id,
    });

    if (response.error) {
      console.error("Login Error: ", response);

      let message = "Something wents to wrong!";
      if (hasApiError(response.error)) {
        message = response.error.data.message;
      }
      toast({
        title: message,
        variant: "destructive",
      });

      return;
    }

    toast({ title: "Experience record updated successfully!" });
    formOptions.reset();
    onClose();
  };

  useEffect(() => {
    formOptions.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  // ----------------------------------------------------------------------

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="mb-5">
          <DialogTitle>Update Experience Record</DialogTitle>
        </DialogHeader>
        <RHFForm formOptions={formOptions} onValid={onValid}>
          <div className="flex flex-col gap-4 mb-10">
            <Fields />
          </div>
          <DialogFooter>
            <Button type="button" variant={"secondary"}>
              Cancel
            </Button>
            <Button type="submit" loading={response.isLoading}>
              Update
            </Button>
          </DialogFooter>
        </RHFForm>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateModal;