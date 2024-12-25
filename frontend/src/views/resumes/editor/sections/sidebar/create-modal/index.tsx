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
import { useCreateResumeMutation } from "@/store/features/resume/api";
import { Resume } from "@/types/resume";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: (v: Resume) => void;
};

const CreateModal = (props: Props) => {
  const { onClose, open, onSuccess } = props;
  const [mutate, response] = useCreateResumeMutation();

  // ----------------------------------------------------------------------

  const defaultValues = useMemo<SchemaType>(
    () => ({
      title: "",
    }),
    []
  );
  const formOptions = useForm({ resolver: zodResolver(schema), defaultValues });

  const onValid: SubmitHandler<SchemaType> = async (values) => {
    const response = await mutate({ ...values });

    if (response.error || !response.data?.results) {
      console.error("Resume Create Error: ", response);

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

    toast({ title: "Resume created successfully!" });
    formOptions.reset();
    onClose();
    onSuccess(response.data.results);
  };

  const handleClose = () => {
    formOptions.reset(defaultValues);
    onClose();
  };

  // ----------------------------------------------------------------------

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader className="mb-5">
          <DialogTitle>Create Resume</DialogTitle>
        </DialogHeader>
        <RHFForm formOptions={formOptions} onValid={onValid}>
          <div className="flex flex-col gap-4 mb-10">
            <Fields />
          </div>
          <DialogFooter>
            <Button variant={"secondary"} type="button" onClick={handleClose}>
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
