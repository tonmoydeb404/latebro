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
import { hasApiError } from "@/helpers/api";
import { toast } from "@/hooks/use-toast";
import { setResume } from "@/store/features/editor/slice";
import {
  useLazyGetResumeQuery,
  useListResumeQuery,
} from "@/store/features/resume/api";
import { useAppDispatch, useEditor } from "@/store/hooks";
import { LucideMoreHorizontal, LucidePlus } from "lucide-react";
import { useEffect } from "react";

type Props = {};

const ResumeDropdown = (props: Props) => {
  const dispatch = useAppDispatch();
  const { resume } = useEditor();
  const response = useListResumeQuery();
  const { data, isLoading } = response;
  const [query] = useLazyGetResumeQuery();

  const updateResume = async (id: string) => {
    const response = await query(id);

    if (response.error || !response.data?.results) {
      console.error("Resume Fetching Error: ", response);

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

    dispatch(setResume(response.data.results));
    toast({ title: "Resume updated!" });
  };

  useEffect(() => {
    if (!resume && data?.results && data?.results?.length > 0) {
      updateResume(data.results[0]._id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.results, dispatch, resume]);

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
        <DropdownMenuRadioGroup
          value={resume?._id}
          onValueChange={(v) => updateResume(v)}
        >
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
