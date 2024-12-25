import { Button } from "@/components/ui/button";
import { useEditor } from "@/store/hooks";

type Props = {};

const Actions = (props: Props) => {
  const { nav } = useEditor();
  return (
    <div className="flex items-center">
      <div className="flex-1" />
      <Button>Update</Button>
    </div>
  );
};

export default Actions;
