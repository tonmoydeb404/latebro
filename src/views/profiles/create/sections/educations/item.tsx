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
};

const Item = (props: Props) => {
  const { data } = props;
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{data.instituteName}</CardTitle>
        <div className="flex items-center !mt-0">
          <span className="text-sm mr-4">{data.subject}</span>
          <span className="text-sm mr-1">
            {moment(data.startedAt).format("ll")}
          </span>
          <span className="text-sm mr-1">-</span>
          <span className="text-sm mr-1">
            {moment(data.endedAt).format("ll")}
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
        <Button size={"sm"} variant={"outline"}>
          <LucideEdit /> Edit
        </Button>
        <Button size={"sm"} variant={"destructive"}>
          <LucideTrash /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Item;
