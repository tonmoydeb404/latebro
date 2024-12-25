import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useQueryRouter } from "@/router/hooks";
import { useEditor } from "@/store/hooks";
import { NavItem } from "../../config";

type Props = {
  data: NavItem;
};

const Item = (props: Props) => {
  const { data } = props;
  const { nav } = useEditor();
  const queryRouter = useQueryRouter();
  const Icon = data.icon;

  const onNavChange = (item: number) => {
    queryRouter.push({ nav: String(item) });
  };

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={nav === data.id ? "secondary" : "ghost"}
            size={"icon"}
            onClick={() => onNavChange(data.id)}
            className="max-sm:size-9"
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
