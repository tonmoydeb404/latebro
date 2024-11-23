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
import { useDeleteSkillMutation } from "@/store/features/resume/skill/api";
import { ResumeSkill } from "@/types/resume";

type Props = {
  data: ResumeSkill | null;
  open: boolean;
  onClose: () => void;
};

const DeleteModal = (props: Props) => {
  const { data, onClose, open } = props;
  const [mutate, results] = useDeleteSkillMutation();
  const { isLoading } = results;

  const onConfirm = async () => {
    if (!data) return;
    const response = await mutate({ _id: data._id, resume: data.resume });

    if (response.error) {
      console.error("Skill Update Error: ", response);

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

    toast({ title: "Skill record deleted!" });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Skill</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            skill record.
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
