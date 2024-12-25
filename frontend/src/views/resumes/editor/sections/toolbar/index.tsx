import { Button } from "@/components/ui/button";
import { setTab } from "@/store/features/editor/slice";
import { useAppDispatch, useEditor } from "@/store/hooks";
import { tabs } from "../../config";

type Props = {};

const Toolbar = (props: Props) => {
  const dispatch = useAppDispatch();
  const { tab } = useEditor();
  return (
    <div className="h-[50px] w-full flex justify-end items-center border-b lg:hidden px-5 gap-2">
      {tabs.map((item) => (
        <Button
          size={"sm"}
          Icon={item.icon}
          variant={tab === item.id ? "secondary" : "ghost"}
          className="flex-1"
          key={item.id}
          onClick={() => dispatch(setTab(item.id))}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default Toolbar;
