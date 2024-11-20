import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ResumeEducation } from "@/types/resume";

type Props = {
  data: ResumeEducation | null;
  open: boolean;
  onClose: () => void;
};

const DeleteModal = (props: Props) => {
  const { data, onClose, open } = props;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="mb-5">
          <DialogTitle>Delete Education</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            education record.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"secondary"}>Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
