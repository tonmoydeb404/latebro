import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
      <CardHeader className="p-3 sm:p-5 !pb-0 flex-row space-y-0 gap-2 items-center flex-wrap">
        <CardTitle className="text-lg">{data.title}</CardTitle>
        <Badge variant={"secondary"}>{data.experience}</Badge>
      </CardHeader>
      <CardFooter className="p-3 sm:p-5 !pt-3 gap-2">
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
