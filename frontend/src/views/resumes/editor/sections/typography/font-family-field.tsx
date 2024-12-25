import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fonts } from "@/lib/react-pdf/fonts";
import { setTypographyFont } from "@/store/features/editor/slice";
import { useEditor } from "@/store/hooks";
import { useDispatch } from "react-redux";

type Props = {
  label: string;
};

const FontFamilyField = (props: Props) => {
  const { label } = props;
  const { typography } = useEditor();
  const dispatch = useDispatch();

  const setFont = (value: string) => {
    if (Object.keys(fonts).includes(value)) {
      dispatch(setTypographyFont(value as keyof typeof fonts));
    }
  };

  return (
    <div className="flex items-center w-full justify-between">
      <Label className="min-w-[100px] shrink-0">{label}</Label>

      <Select value={typography?.family ?? ""} onValueChange={setFont}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select Font Family" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(fonts).map((key) => (
            <SelectItem key={key} value={key}>
              {fonts[key as keyof typeof fonts]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FontFamilyField;
