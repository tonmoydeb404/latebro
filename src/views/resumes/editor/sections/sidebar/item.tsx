import { Button } from "@/components/ui/button";
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
  return (
    <Button
      variant={nav === data.id ? "secondary" : "ghost"}
      size={"icon"}
      onClick={() => dispatch(setNav(data.id))}
    >
      {data.icon}
    </Button>
  );
};

export default Item;
