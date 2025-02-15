import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useModal from "@/hooks/use-modal";
import { useQueryRouter } from "@/router/hooks";
import { paths } from "@/router/paths";
import { useListResumeQuery } from "@/store/features/resume/api";
import { LucideHome, LucideMoreHorizontal, LucidePlus } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CreateModal from "./create-modal";
import ResumeSelectModal from "./resume-select-modal";

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

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild disabled={isLoading} className="mb-2">
          <Button
            size={"icon"}
            variant="outline"
            loading={isLoading}
            className="max-sm:size-9"
          >
            <LucideMoreHorizontal size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-5" side="right">
          <DropdownMenuItem asChild>
            <Link href={paths.resumes.root}>
              <LucideHome />
              <span>Back to templates</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => createModal.openModal(undefined)}>
            <LucidePlus />
            <span>New Resume</span>
          </DropdownMenuItem>
          <DropdownMenuLabel>Resumes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={resume || undefined}
            onValueChange={updateResume}
          >
            {data?.map((item) => (
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
      <ResumeSelectModal
        open={!resume}
        onClose={() => {}}
        onCreateNew={createModal.openModal}
        onSelect={(id) => updateResume(id)}
      />
    </>
  );
};

export default ResumeDropdown;
