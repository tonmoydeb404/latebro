import { Button } from "@/components/ui/button";
import { LucideDownload } from "lucide-react";

type Props = {};

const Toolbar = (props: Props) => {
  return (
    <div className="h-[50px] w-full flex justify-end items-center border-b px-5 ">
      <Button size={"sm"} Icon={LucideDownload} variant={"outline"}>
        Download PDF
      </Button>
    </div>
  );
};

export default Toolbar;
