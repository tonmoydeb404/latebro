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
import { useDeleteExperienceMutation } from "@/store/features/resume/experience/api";
import { ResumeExperience } from "@/types/resume";

type Props = {
  data: ResumeExperience | null;
  open: boolean;
  onClose: () => void;
};

const DeleteModal = (props: Props) => {
  const { data, onClose, open } = props;
  const [mutate, results] = useDeleteExperienceMutation();
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

    toast({ title: "Experience record deleted!" });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Experience</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            experience record.
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
