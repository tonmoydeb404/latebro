import { StateWrapper } from "@/components/common/state";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useListResumeQuery } from "@/store/features/resume/api";

type Props = {
  open: boolean;
  onClose: () => void;
  onCreateNew: () => void;
  onSelect: (id: string) => void;
};

const ResumeSelectModal = (props: Props) => {
  const { open, onClose, onCreateNew, onSelect } = props;

  const response = useListResumeQuery();
  const { data, isLoading, isError, isSuccess } = response;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent hideCloseButton>
        <DialogHeader>
          <DialogTitle>Select Resume Profile</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <StateWrapper
          isLoading={isLoading}
          isEmpty={isSuccess && data.length === 0}
          isError={isError}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {data &&
              data.map((item) => (
                <div
                  onClick={() => {
                    onSelect(item._id);
                    onClose();
                  }}
                  className="flex flex-col items-center justify-center border py-3 gap-2 cursor-pointer hover:bg-accent bg-card duration-200 rounded-md"
                  key={item._id}
                >
                  <Avatar className="size-20 rounded-sm">
                    <AvatarImage
                      src={`https://api.dicebear.com/9.x/dylan/svg?seed=${item._id}`}
                    />
                    <AvatarFallback>{item.title}</AvatarFallback>
                  </Avatar>

                  <h4 className="text-sm text-center line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              ))}
          </div>
        </StateWrapper>

        <DialogFooter className="mt-2">
          <Button onClick={onCreateNew} className="w-full">
            Create New
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeSelectModal;
