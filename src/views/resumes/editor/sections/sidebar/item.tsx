import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { setNav } from "@/store/features/editor/slice";
import { useAppDispatch, useEditor } from "@/store/hooks";
import { NavItem } from "../../config";

type Props = {
  data: NavItem;
};

const Item = (props: Props) => {
  const { data } = props;
  const { nav } = useEditor();
  const dispatch = useAppDispatch();

  const Icon = data.icon;

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={nav === data.id ? "secondary" : "ghost"}
            size={"icon"}
            onClick={() => dispatch(setNav(data.id))}
          >
            <Icon size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{data.label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Item;
