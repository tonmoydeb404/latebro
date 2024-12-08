import { ScrollArea } from "@/components/ui/scroll-area";
import { navs } from "../../config";
import Item from "./item";
import ResumeDropdown from "./resume-dropdown";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <ScrollArea className="border-r shrink-0">
      <div className="flex flex-col gap-1 px-2 py-5">
        <ResumeDropdown />
        {navs.map((item) => (
          <Item key={item.id} data={item} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default Sidebar;
