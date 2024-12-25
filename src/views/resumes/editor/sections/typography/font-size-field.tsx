import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideMinus, LucidePlus } from "lucide-react";

type Props = {
  label: string;
  value: number;
  onChange: (v: number) => void;
};

const FontSizeField = (props: Props) => {
  const { label, onChange, value } = props;
  return (
    <div className="flex items-center w-full justify-between">
      <Label className="min-w-[100px] shrink-0">{label}</Label>

      <Input
        value={value}
        onChange={(e) => onChange(e.target.valueAsNumber)}
        type="number"
        containerClassname="w-[200px]"
        className="text-center"
        startContent={
          <Button
            size={"icon"}
            variant={"secondary"}
            className="size-7 ml-2"
            onClick={() => onChange((value || 1) - 1)}
            disabled={value <= 0}
          >
            <LucideMinus />
          </Button>
        }
        endContent={
          <Button
            size={"icon"}
            variant={"secondary"}
            className="size-7 mr-2"
            onClick={() => onChange((value || 0) + 1)}
          >
            <LucidePlus />
          </Button>
        }
      />
    </div>
  );
};

export default FontSizeField;
