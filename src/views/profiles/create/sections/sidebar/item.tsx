import { Button } from "@/components/ui/button";
import { NavItem } from "../../config";

type Props = {
  data: NavItem;
};

const Item = (props: Props) => {
  const { data } = props;
  return (
    <Button variant={"ghost"} size={"icon"}>
      {data.icon}
    </Button>
  );
};

export default Item;
