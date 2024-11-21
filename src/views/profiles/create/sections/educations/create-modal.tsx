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
import { toast } from "@/hooks/use-toast";
import { useCreateEducationMutation } from "@/store/features/resume/education/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {};

const CreateModal = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [create] = useCreateEducationMutation();

  // ----------------------------------------------------------------------

  const defaultValues = useMemo<SchemaType>(
    () => ({
      endedAt: undefined,
      instituteName: "",
      isCurrent: false,
      startedAt: new Date(),
      subject: "",
      description: "",
    }),
    []
  );
  const formOptions = useForm({ resolver: zodResolver(schema), defaultValues });

  const onValid: SubmitHandler<SchemaType> = async (values) => {
    console.log({ values });

    const response = await create({
      ...values,
      startedAt: values.startedAt.toISOString(),
      endedAt: values.endedAt?.toISOString(),
      resumeId: "673e9e56e96cb7bb8646a68d",
    });

    if (response.data?.status !== "success") {
      toast({
        title: response.data?.message || "Something wents to wrong",
        variant: "destructive",
      });
      return;
    }

    toast({ title: "Education created successfully!" });
    formOptions.reset();
    setOpen(false);
  };

  // ----------------------------------------------------------------------

  console.log(formOptions.getValues());

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"default"} size={"sm"}>
          Add New
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-5">
          <DialogTitle>Create Education</DialogTitle>
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
            <Button type="submit">Create</Button>
          </DialogFooter>
        </RHFForm>
      </DialogContent>
    </Dialog>
  );
};

export default CreateModal;
