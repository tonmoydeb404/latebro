import { ColorPicker } from "@/components/common/react-colorful";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateRandomColor, getForegroundColor } from "@/utils/color";
import { debounce } from "@/utils/debounce";
import { Dices, LucidePipette } from "lucide-react";
import { useMemo } from "react";

type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
};

const ColorField = (props: Props) => {
  const { label, onChange, value } = props;
  const debouncedOnChange = useMemo(() => debounce(onChange, 300), [onChange]);
  return (
    <div>
      <Label>{label}</Label>
      <Input
        startContent={
          <ColorPicker value={value} onChange={debouncedOnChange}>
            <button
              className="size-7 shrink-0 border rounded-md cursor-crosshair flex items-center justify-center ml-2"
              style={{ backgroundColor: value }}
            >
              <LucidePipette
                size={14}
                color={getForegroundColor(value || "#FFFFFF")}
              />
            </button>
          </ColorPicker>
        }
        endContent={
          <Button
            size={"icon"}
            variant={"outline"}
            type="button"
            className="size-7 mr-2"
            onClick={() => onChange(generateRandomColor())}
          >
            <Dices size={14} />
          </Button>
        }
        value={value}
        className="text-center"
        readOnly
      />
    </div>
  );
};

export default ColorField;
