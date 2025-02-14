import { setColors } from "@/store/features/editor/slice";
import { useAppDispatch, useEditor } from "@/store/hooks";
import { EditorColorsKeys } from "@/types/editor";
import Header from "../../common/header";
import ColorField from "./color-field";
import Presets from "./presets";

type Props = {};

const ColorsForm = (props: Props) => {
  const { colors } = useEditor();
  const dispatch = useAppDispatch();

  const updateValue = (key: EditorColorsKeys) => (value: string) => {
    dispatch(setColors({ [key]: value }));
  };

  console.log({ colors });

  return (
    <div>
      <Header
        title="Customize Colors"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
        className="mb-10"
      />

      <Presets />

      <div className="flex flex-col gap-4 mb-10">
        <ColorField
          label="Background"
          value={colors?.background || ""}
          onChange={updateValue("background")}
        />
        <ColorField
          label="Foreground"
          value={colors?.foreground || ""}
          onChange={updateValue("foreground")}
        />
        <ColorField
          label="Secondary"
          value={colors?.secondary || ""}
          onChange={updateValue("secondary")}
        />
        <ColorField
          label="Primary"
          value={colors?.primary || ""}
          onChange={updateValue("primary")}
        />
        <ColorField
          label="Primary Foreground"
          value={colors?.primary_foreground || ""}
          onChange={updateValue("primary_foreground")}
        />
        <ColorField
          label="Muted"
          value={colors?.muted || ""}
          onChange={updateValue("muted")}
        />
      </div>
    </div>
  );
};

export default ColorsForm;
