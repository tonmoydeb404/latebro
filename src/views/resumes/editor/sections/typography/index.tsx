import { setTypographySize } from "@/store/features/editor/slice";
import { useAppDispatch, useEditor } from "@/store/hooks";
import { EditorFontSizesKeys } from "@/types/editor";
import Header from "../../common/header";
import FontFamilyField from "./font-family-field";
import FontSizeField from "./font-size-field";

type Props = {};

const TypographyForm = (props: Props) => {
  const { typography } = useEditor();
  const dispatch = useAppDispatch();

  const updateFontSize = (key: EditorFontSizesKeys) => (value: number) => {
    dispatch(setTypographySize({ [key]: value }));
  };

  return (
    <div>
      <Header
        title="Typography"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
        className="mb-10"
      />

      <div className="flex flex-col gap-y-3">
        <FontFamilyField label="Font Family" />
        <FontSizeField
          label="Extra Small"
          value={typography?.sizes?.xs || 0}
          onChange={updateFontSize("xs")}
        />
        <FontSizeField
          label="Small"
          value={typography?.sizes?.sm || 0}
          onChange={updateFontSize("sm")}
        />
        <FontSizeField
          label="Normal"
          value={typography?.sizes?.md || 0}
          onChange={updateFontSize("md")}
        />
        <FontSizeField
          label="Large"
          value={typography?.sizes?.lg || 0}
          onChange={updateFontSize("lg")}
        />
        <FontSizeField
          label="Extra Large"
          value={typography?.sizes?.xl || 0}
          onChange={updateFontSize("xl")}
        />
      </div>
    </div>
  );
};

export default TypographyForm;
