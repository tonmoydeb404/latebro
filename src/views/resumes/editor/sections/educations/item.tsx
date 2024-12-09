import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResumeEducation } from "@/types/resume";
import { LucideEdit, LucideTrash } from "lucide-react";
import moment from "moment";

type Props = {
  data: ResumeEducation;
  onDelete?: () => void;
  onEdit?: () => void;
};

const Item = (props: Props) => {
  const { data, onDelete, onEdit } = props;
  return (
    <Card>
      <CardHeader className="p-3 sm:p-5 !pb-0">
        <CardTitle className="text-lg">{data.instituteName}</CardTitle>
        <div className="flex sm:items-center flex-col sm:flex-row !mt-0">
          <span className="text-sm mr-4">{data.subject}</span>

          <div className="flex items-center">
            <span className="text-sm mr-1 text-muted-foreground">
              {moment(data.startedAt).format("ll")}
            </span>
            <span className="text-sm mr-1 text-muted-foreground">-</span>
            <span className="text-sm mr-1 text-muted-foreground">
              {data.endedAt ? moment(data.endedAt).format("ll") : "Current"}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3 sm:p-5 !pt-3">
        <CardDescription>{data.description}</CardDescription>
      </CardContent>
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
