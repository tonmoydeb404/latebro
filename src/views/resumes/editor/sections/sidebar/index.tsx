import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { paths } from "@/router/paths";
import { LucideHome } from "lucide-react";
import Link from "next/link";
import { navs } from "../../config";
import Item from "./item";
import ResumeDropdown from "./resume-dropdown";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <ScrollArea className="border-r shrink-0">
      <div className="flex flex-col gap-1 px-2 py-5">
        <Button
          size={"icon"}
          variant={"outline"}
          className="max-sm:size-9 mb-1.5"
          asChild
        >
          <Link href={paths.resumes.root}>
            <LucideHome size={18} />
          </Link>
        </Button>
        <ResumeDropdown />
        {navs.map((item) => (
          <Item key={item.id} data={item} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default Sidebar;
