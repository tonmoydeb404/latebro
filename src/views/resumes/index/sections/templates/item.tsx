"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { paths } from "@/router/paths";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  description: string;
  id: string;
};

const Item = (props: Props) => {
  const router = useRouter();
  const { title, description, id } = props;

  return (
    <Card
      onClick={() => router.push(`${paths.resumes.editor}?template=${id}`)}
      className="cursor-pointer"
    >
      <CardHeader className="p-3 sm:p-4">
        <div className="aspect-video animate-pulse bg-slate-200 rounded-lg"></div>
      </CardHeader>
      <CardContent className="p-3 sm:p-4 !pt-1">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Item;
