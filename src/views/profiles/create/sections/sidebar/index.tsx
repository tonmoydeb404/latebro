import { ScrollArea } from "@/components/ui/scroll-area";
import { navs } from "../../config";
import Item from "./item";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="border-r shrink-0">
      <ScrollArea>
        <div className="flex flex-col gap-1 px-2">
          {navs.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
