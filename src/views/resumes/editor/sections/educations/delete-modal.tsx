import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { hasApiError } from "@/helpers/api";
import { toast } from "@/hooks/use-toast";
import { useDeleteEducationMutation } from "@/store/features/resume/education/api";
import { ResumeEducation } from "@/types/resume";

type Props = {
  data: ResumeEducation | null;
  open: boolean;
  onClose: () => void;
};

const DeleteModal = (props: Props) => {
  const { data, onClose, open } = props;
  const [mutate, results] = useDeleteEducationMutation();
  const { isLoading } = results;

  const onConfirm = async () => {
    if (!data) return;
    const response = await mutate({ _id: data._id, resume: data.resume });

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

    toast({ title: "Education record deleted!" });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Education</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            education record.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"secondary"} onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onConfirm} loading={isLoading}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
