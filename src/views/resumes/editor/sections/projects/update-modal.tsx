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
import { useUpdateProjectMutation } from "@/store/features/resume/project/api";
import { ResumeProject } from "@/types/resume";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {
  data: ResumeProject | null;
  open: boolean;
  onClose: () => void;
};

const UpdateModal = (props: Props) => {
  const { data, onClose, open } = props;
  const [mutate, response] = useUpdateProjectMutation();

  // ----------------------------------------------------------------------

  const defaultValues = useMemo<SchemaType>(
    () => ({
      name: data?.name || "",
      previewUrl: data?.previewUrl || "",
      sourceUrl: data?.sourceUrl || "",
      caseStudyUrl: data?.caseStudyUrl || "",
      tools: Array.isArray(data?.tools)
        ? data?.tools.map((text, index) => ({ id: index.toString(), text }))
        : [],
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
      resume: data.resume,
      _id: data._id,
      tools: values.tools.map((t) => t.text),
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

    toast({ title: "Project record updated successfully!" });
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
      <DialogContent className={"overflow-y-auto max-h-screen max-w-4xl"}>
        <DialogHeader className="mb-5">
          <DialogTitle>Update Project Record</DialogTitle>
        </DialogHeader>
        <RHFForm formOptions={formOptions} onValid={onValid}>
          <Fields />

          <DialogFooter>
            <Button type="button" variant={"secondary"} onClick={onClose}>
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
