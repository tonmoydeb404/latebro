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
import { useUpdateEducationMutation } from "@/store/features/resume/education/api";
import { ResumeEducation } from "@/types/resume";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {
  data: ResumeEducation | null;
  open: boolean;
  onClose: () => void;
};

const UpdateModal = (props: Props) => {
  const { data, onClose, open } = props;
  const [mutate, response] = useUpdateEducationMutation();

  // ----------------------------------------------------------------------

  const defaultValues = useMemo<SchemaType>(
    () => ({
      endedAt: new Date(data?.endedAt || ""),
      instituteName: data?.instituteName || "",
      isCurrent: data?.isCurrent || false,
      startedAt: new Date(data?.startedAt || ""),
      subject: data?.subject || "",
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
      endedAt: values.endedAt?.toISOString(),
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

    toast({ title: "Education updated successfully!" });
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
          <DialogTitle>Update Education</DialogTitle>
        </DialogHeader>
        <RHFForm formOptions={formOptions} onValid={onValid}>
          <div className="flex flex-col gap-4">
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
