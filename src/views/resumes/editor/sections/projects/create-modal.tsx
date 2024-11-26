import { RHFForm } from "@/components/common/rhf";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { hasApiError } from "@/helpers/api";
import { toast } from "@/hooks/use-toast";
import { useCreateProjectMutation } from "@/store/features/resume/project/api";
import { useEditor } from "@/store/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {};

const CreateModal = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [mutate, response] = useCreateProjectMutation();
  const { resume } = useEditor();

  // ----------------------------------------------------------------------

  const defaultValues = useMemo<SchemaType>(
    () => ({
      name: "",
      previewUrl: "",
      sourceUrl: "",
      caseStudyUrl: "",
      tools: [],
      description: "",
    }),
    []
  );
  const formOptions = useForm({ resolver: zodResolver(schema), defaultValues });

  const onValid: SubmitHandler<SchemaType> = useCallback(
    async (values) => {
      if (!resume?._id) return;

      const response = await mutate({
        ...values,
        resume: resume?._id,
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

      toast({ title: "Project record created successfully!" });
      formOptions.reset();
      setOpen(false);
    },
    [formOptions, mutate, resume?._id]
  );

  const onClose = () => {
    formOptions.reset(defaultValues);
    setOpen(false);
  };

  // ----------------------------------------------------------------------

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogTrigger asChild>
        <Button variant={"default"} size={"sm"}>
          Add New
        </Button>
      </DialogTrigger>

      <DialogContent className={"overflow-y-auto max-h-screen max-w-4xl"}>
        <DialogHeader className="mb-5">
          <DialogTitle>Create Project Record</DialogTitle>
        </DialogHeader>
        <RHFForm formOptions={formOptions} onValid={onValid}>
          <Fields />
          <DialogFooter>
            <Button variant={"secondary"} type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" loading={response.isLoading}>
              Create
            </Button>
          </DialogFooter>
        </RHFForm>
      </DialogContent>
    </Dialog>
  );
};

export default CreateModal;
