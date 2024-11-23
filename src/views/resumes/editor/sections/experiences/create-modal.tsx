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
import { useCreateExperienceMutation } from "@/store/features/resume/experience/api";
import { useEditor } from "@/store/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {};

const CreateModal = (props: Props) => {
  const { resume } = useEditor();
  const [open, setOpen] = useState(false);
  const [mutate, response] = useCreateExperienceMutation();

  // ----------------------------------------------------------------------

  const defaultValues = useMemo<SchemaType>(
    () => ({
      endedAt: null,
      companyName: "",
      isCurrent: false,
      startedAt: new Date(),
      position: "",
      description: "",
    }),
    []
  );
  const formOptions = useForm({ resolver: zodResolver(schema), defaultValues });

  const onValid: SubmitHandler<SchemaType> = async (values) => {
    if (!resume) return;

    const response = await mutate({
      ...values,
      startedAt: values.startedAt.toISOString(),
      endedAt: values.endedAt?.toISOString() ?? null,
      resume: resume._id,
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

    toast({ title: "Experience record created successfully!" });
    formOptions.reset();
    setOpen(false);
  };

  // ----------------------------------------------------------------------

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"default"} size={"sm"}>
          Add New
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-5">
          <DialogTitle>Create Experience Record</DialogTitle>
        </DialogHeader>
        <RHFForm formOptions={formOptions} onValid={onValid}>
          <div className="flex flex-col gap-4">
            <Fields />
          </div>
          <DialogFooter>
            <Button
              variant={"secondary"}
              type="button"
              onClick={() => setOpen(false)}
            >
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
