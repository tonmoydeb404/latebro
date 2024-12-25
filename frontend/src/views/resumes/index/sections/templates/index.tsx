import templates from "@/templates/resumes";
import Item from "./item";

type Props = {};

const Templates = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {templates.map((template) => (
        <Item
          title={template.title}
          description={template.text}
          id={template.id}
          key={template.id}
          cover={template.cover}
        />
      ))}
    </div>
  );
};

export default Templates;
