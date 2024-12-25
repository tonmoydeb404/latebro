import { setColors } from "@/store/features/editor/slice";
import { useAppDispatch } from "@/store/hooks";
import { colorPresets } from "@/templates/resumes/presets";

type Props = {};

const Presets = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h3 className="text-sm mb-2">Presets</h3>
      <div className="flex items-center gap-1 mb-5">
        {colorPresets.map((item, index) => {
          const color = Object.values(item).map((value, valueIndex, array) => {
            const length = Math.round(100 / array.length);
            const start = valueIndex * length;
            const end = (valueIndex + 1) * length;

            return `${value} ${start}% ${end}%`;
          });

          return (
            <button
              key={index}
              className="border size-10 rounded-md"
              style={{
                background: `conic-gradient(${color.join(", ")})`,
              }}
              onClick={() => dispatch(setColors(item))}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Presets;
