import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResumeSocial } from "@/types/resume";
import { LucideEdit, LucideTrash } from "lucide-react";

type Props = {
  data: ResumeSocial;
  onDelete?: () => void;
  onEdit?: () => void;
};

const Item = (props: Props) => {
  const { data, onDelete, onEdit } = props;
  return (
    <Card>
      <CardHeader className="p-3 sm:p-5 !pb-0 flex-row flex-wrap space-y-0 gap-2 items-center">
        <CardTitle className="text-lg">{data.title}</CardTitle>
        <Badge variant={"secondary"}>{data.type}</Badge>
      </CardHeader>
      <CardContent className="p-3 sm:p-5 !pt-1">
        <CardDescription>{data.url}</CardDescription>
      </CardContent>
      <CardFooter className="gap-2 p-3 sm:p-5 !pt-3">
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
