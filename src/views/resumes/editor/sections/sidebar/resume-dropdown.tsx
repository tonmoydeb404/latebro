import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useModal from "@/hooks/use-modal";
import { useQueryRouter } from "@/router/hooks";
import { useListResumeQuery } from "@/store/features/resume/api";
import { LucideMoreHorizontal, LucidePlus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import CreateModal from "./create-modal";

type Props = {};

const ResumeDropdown = (props: Props) => {
  const queryRouter = useQueryRouter();
  const searchparams = useSearchParams();
  const resume = searchparams.get("resume");
  const createModal = useModal();
  const response = useListResumeQuery();
  const { data, isLoading } = response;

  const updateResume = async (id: string) => {
    queryRouter.replace({ resume: id });
  };

  // ----------------------------------------------------------------------

  useEffect(() => {
    if (!resume && data?.results && data?.results.length > 0) {
      updateResume(data.results[0]._id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.results, resume]);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild disabled={isLoading} className="mb-2">
          <Button size={"icon"} variant="outline" loading={isLoading}>
            <LucideMoreHorizontal size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-5" side="right">
          <DropdownMenuItem onClick={() => createModal.openModal(undefined)}>
            <LucidePlus />
            <span>New Resume</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuLabel>Resumes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={resume || undefined}
            onValueChange={updateResume}
          >
            {data?.results.map((item) => (
              <DropdownMenuRadioItem key={item._id} value={item._id}>
                {item.title}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <CreateModal
        onClose={createModal.closeModal}
        open={createModal.isOpen}
        onSuccess={(v) => updateResume(v._id)}
      />
    </>
  );
};

export default ResumeDropdown;
