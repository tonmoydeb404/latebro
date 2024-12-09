import { StateWrapper } from "@/components/common/state";
import useModal from "@/hooks/use-modal";
import { useEditor } from "@/store/hooks";
import { ResumeExperience } from "@/types/resume";
import Header from "../../common/header";
import CreateModal from "./create-modal";
import DeleteModal from "./delete-modal";
import Item from "./item";
import UpdateModal from "./update-modal";

type Props = {};

const ExperiencesForm = (props: Props) => {
  const deleteModal = useModal<ResumeExperience>();
  const updateModal = useModal<ResumeExperience>();
  const { resume } = useEditor();

  // ----------------------------------------------------------------------

  return (
    <>
      <Header
        title="Experiences"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
        actions={<CreateModal />}
      />

      <StateWrapper
        isLoading={!resume}
        isError={false}
        isEmpty={resume?.experiences?.length === 0}
      >
        {resume?.experiences && resume?.experiences?.length > 0 && (
          <div className="flex flex-col gap-2">
            {resume?.experiences.map((item) => (
              <Item
                key={item._id}
                data={item}
                onDelete={() => deleteModal.openModal(item)}
                onEdit={() => updateModal.openModal(item)}
              />
            ))}
          </div>
        )}
      </StateWrapper>

      <DeleteModal
        data={deleteModal.data}
        onClose={deleteModal.closeModal}
        open={deleteModal.isOpen}
      />

      <UpdateModal
        data={updateModal.data}
        onClose={updateModal.closeModal}
        open={updateModal.isOpen}
      />
    </>
  );
};

export default ExperiencesForm;
