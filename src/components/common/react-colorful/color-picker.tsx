import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactNode } from "react";
import { HexColorPicker } from "react-colorful";

type Props = {
  children: ReactNode;
  value: string;
  onChange: (v: string) => void;
};

const ColorPicker = (props: Props) => {
  const { children, value, onChange } = props;

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="w-auto">
        <HexColorPicker
          color={value}
          onChange={(color) => {
            onChange(color);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;
