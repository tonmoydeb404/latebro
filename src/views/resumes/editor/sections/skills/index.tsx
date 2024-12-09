import { StateWrapper } from "@/components/common/state";
import useModal from "@/hooks/use-modal";
import { useEditor } from "@/store/hooks";
import { ResumeSkill } from "@/types/resume";
import Header from "../../common/header";
import CreateModal from "./create-modal";
import DeleteModal from "./delete-modal";
import Item from "./item";
import UpdateModal from "./update-modal";

type Props = {};

const SkillsForm = (props: Props) => {
  const deleteModal = useModal<ResumeSkill>();
  const updateModal = useModal<ResumeSkill>();
  const { resume } = useEditor();

  // ----------------------------------------------------------------------

  return (
    <>
      <Header
        title="Skills"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
        actions={<CreateModal />}
      />

      <StateWrapper
        isLoading={!resume}
        isError={false}
        isEmpty={resume?.skills?.length === 0}
      >
        {resume?.skills && resume?.skills?.length > 0 && (
          <div className="flex flex-col gap-2">
            {resume.skills.map((item) => (
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

export default SkillsForm;
