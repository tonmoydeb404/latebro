import { Button } from "@/components/ui/button";
import { useEditor } from "@/store/hooks";
import { LucideArrowLeft } from "lucide-react";

type Props = {};

const Actions = (props: Props) => {
  const { nav } = useEditor();
  return (
    <div className="flex items-center">
      {nav > 0 && (
        <Button variant={"secondary"}>
          <LucideArrowLeft />
          Back
        </Button>
      )}
      <div className="flex-1" />
      <Button>Save & Next</Button>
    </div>
  );
};

export default Actions;
