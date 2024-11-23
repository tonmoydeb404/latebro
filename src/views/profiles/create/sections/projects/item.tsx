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
import { ResumeProject } from "@/types/resume";
import { LucideEdit, LucideTrash } from "lucide-react";
import Link from "next/link";

type Props = {
  data: ResumeProject;
  onDelete?: () => void;
  onEdit?: () => void;
};

const Item = (props: Props) => {
  const { data, onDelete, onEdit } = props;
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{data.name}</CardTitle>
        <div className="flex items-center gap-2">
          <Link href={data.previewUrl || "#"}>
            <Badge variant="outline">Preview</Badge>
          </Link>

          <Link href={data.sourceUrl || "#"}>
            <Badge variant="outline">Source</Badge>
          </Link>

          <Link href={data.caseStudyUrl || "#"}>
            <Badge variant="outline">Case Study</Badge>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{data.description}</CardDescription>
        <p>{data.tools.join(",")}</p>
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
