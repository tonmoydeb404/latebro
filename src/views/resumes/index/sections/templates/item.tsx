"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { paths } from "@/router/paths";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  description: string;
  id: string;
  cover: string;
};

const Item = (props: Props) => {
  const router = useRouter();
  const { title, description, id, cover } = props;

  return (
    <Card
      onClick={() => router.push(`${paths.resumes.editor}?template=${id}`)}
      className="cursor-pointer"
    >
      <CardHeader className="p-3 sm:p-4 aspect-video w-full relative">
        <Image src={cover} alt={title} className="" fill />
      </CardHeader>
      <CardContent className="p-3 sm:p-4 !pt-1">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Item;
