import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { paths } from "@/router/paths";
import { LucideHome } from "lucide-react";
import Link from "next/link";

import { Fragment } from "react";
import { navGroups } from "../../config";
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
        {navGroups.map((item, index) => (
          <Fragment key={index}>
            <div className="border-b my-2 mx-auto w-3/4" />
            {item.childs.map((child) => (
              <Item key={child.id} data={child} />
            ))}
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Sidebar;
