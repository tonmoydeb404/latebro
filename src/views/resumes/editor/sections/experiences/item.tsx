import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResumeExperience } from "@/types/resume";
import { LucideEdit, LucideTrash } from "lucide-react";
import moment from "moment";

type Props = {
  data: ResumeExperience;
  onDelete?: () => void;
  onEdit?: () => void;
};

const Item = (props: Props) => {
  const { data, onDelete, onEdit } = props;
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{data.companyName}</CardTitle>
        <div className="flex items-center !mt-0">
          <span className="text-sm mr-4">{data.position}</span>
          <span className="text-sm mr-1 text-muted-foreground">
            {moment(data.startedAt).format("ll")}
          </span>
          <span className="text-sm mr-1 text-muted-foreground">-</span>
          <span className="text-sm mr-1 text-muted-foreground">
            {data.endedAt ? moment(data.endedAt).format("ll") : "Current"}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>
          {data.description} Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Dolore, expedita?
        </CardDescription>
      </CardContent>
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
