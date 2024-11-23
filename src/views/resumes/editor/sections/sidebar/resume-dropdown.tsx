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
import { useListResumeQuery } from "@/store/features/resume/api";
import { LucideMoreHorizontal, LucidePlus } from "lucide-react";

type Props = {};

const ResumeDropdown = (props: Props) => {
  const response = useListResumeQuery();
  const { data, isLoading } = response;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={isLoading} className="mb-2">
        <Button size={"icon"} variant="outline" loading={isLoading}>
          <LucideMoreHorizontal size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-5" side="right">
        <DropdownMenuItem>
          <LucidePlus />
          <span>New Resume</span>
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuLabel>Resumes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          {data?.results.map((item) => (
            <DropdownMenuRadioItem key={item._id} value={item._id}>
              {item.title}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ResumeDropdown;
