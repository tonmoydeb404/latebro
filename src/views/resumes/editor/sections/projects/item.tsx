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
import {
  LucideEdit,
  LucideExternalLink,
  LucideFile,
  LucideGitBranch,
  LucideTrash,
} from "lucide-react";
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
      <CardHeader>
        <CardTitle className="text-lg">{data.name}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1 flex-wrap">
          {data.tools.map((t) => (
            <Badge key={t} variant={"outline"}>
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <div className="flex items-center mr-auto">
          {data.previewUrl && (
            <Link passHref href={data.previewUrl} target="_blank">
              <Button variant="ghost" size={"icon"}>
                <LucideExternalLink size={14} />
              </Button>
            </Link>
          )}

          {data.sourceUrl && (
            <Link passHref href={data.sourceUrl} target="_blank">
              <Button variant="ghost" size={"icon"}>
                <LucideGitBranch size={14} />
              </Button>
            </Link>
          )}

          {data.caseStudyUrl && (
            <Link passHref href={data.caseStudyUrl} target="_blank">
              <Button variant="ghost" size={"icon"}>
                <LucideFile size={14} />
              </Button>
            </Link>
          )}
        </div>
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
