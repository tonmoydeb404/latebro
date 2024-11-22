import { RHFForm } from "@/components/common/rhf";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ResumeEducation } from "@/types/resume";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {
  data: ResumeEducation | null;
  open: boolean;
  onClose: () => void;
};

const UpdateModal = (props: Props) => {
  const { data, onClose, open } = props;
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
  const formOptions = useForm({ resolver: zodResolver(schema), defaultValues });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="mb-5">
          <DialogTitle>Update Education</DialogTitle>
        </DialogHeader>
        <RHFForm formOptions={formOptions}>
          <div className="flex flex-col gap-4">
            <Fields />
          </div>
        </RHFForm>
        <DialogFooter>
          <Button variant={"secondary"}>Cancel</Button>
          <Button>Update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateModal;
