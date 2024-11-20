import Header from "../../common/header";
import CreateModal from "./create-modal";

type Props = {};

const EducationsForm = (props: Props) => {
  return (
    <>
      <div className="flex items-center justify-between mb-10 gap-10">
        <Header
          title="Educations"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
        />
        <CreateModal />
      </div>

      <div className="border border-dashed h-20 flex flex-col items-center justify-center text-center">
        <span className="text-xs uppercase text-muted-foreground">
          currently nothing
        </span>
      </div>

      <div className="flex flex-col gap-4 mb-16"></div>
    </>
  );
};

export default EducationsForm;
