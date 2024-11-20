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
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {};

const CreateModal = (props: Props) => {
  const defaultValues = useMemo<SchemaType>(
    () => ({
      endDate: "",
      instituteName: "",
      isCurrent: false,
      startDate: "",
      subject: "",
      description: "",
    }),
    []
  );
  const formOptions = useForm({ resolver: zodResolver(schema), defaultValues });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"} size={"sm"}>
          Add New
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-5">
          <DialogTitle>Create Education</DialogTitle>
        </DialogHeader>
        <RHFForm formOptions={formOptions}>
          <div className="flex flex-col gap-4">
            <Fields />
          </div>
        </RHFForm>
        <DialogFooter>
          <Button variant={"secondary"}>Cancel</Button>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateModal;
