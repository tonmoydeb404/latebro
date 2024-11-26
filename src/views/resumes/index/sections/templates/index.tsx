import templates from "@/templates/resumes";
import Item from "./item";

type Props = {};

const Templates = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {templates.map((template) => (
        <Item
          title={template.title}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, suscipit"
          }
          id={template.id}
          key={template.id}
        />
      ))}
    </div>
  );
};

export default Templates;
