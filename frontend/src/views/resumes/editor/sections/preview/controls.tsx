import { Button } from "@/components/ui/button";
import { LucideRefreshCw, LucideZoomIn, LucideZoomOut } from "lucide-react";
import { useControls } from "react-zoom-pan-pinch";

type Props = {};

const Controls = (props: Props) => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="flex flex-col items-center justify-center fixed md:absolute bottom-5 left-5 select-none gap-1">
      <Button
        size={"icon"}
        onClick={() => zoomIn()}
        className="size-9"
        variant={"outline"}
      >
        <LucideZoomIn size={18} />
      </Button>
      <Button
        size={"icon"}
        onClick={() => resetTransform()}
        className="size-9"
        variant={"outline"}
      >
        <LucideRefreshCw size={18} />
      </Button>
      <Button
        size={"icon"}
        onClick={() => zoomOut()}
        className="size-9"
        variant={"outline"}
      >
        <LucideZoomOut size={18} />
      </Button>
    </div>
  );
};

export default Controls;
