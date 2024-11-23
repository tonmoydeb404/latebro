import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResumeSkill } from "@/types/resume";
import { LucideEdit, LucideTrash } from "lucide-react";

type Props = {
  data: ResumeSkill;
  onDelete?: () => void;
  onEdit?: () => void;
};

const Item = (props: Props) => {
  const { data, onDelete, onEdit } = props;
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{data.title}</CardTitle>
        <CardDescription>{data.experience}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-2">
        <Button
          Icon={LucideEdit}
          size={"sm"}
          variant={"outline"}
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button
          Icon={LucideTrash}
          size={"sm"}
          variant={"destructive"}
          onClick={onDelete}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Item;
