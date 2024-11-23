import { StateWrapper } from "@/components/common/state";
import useModal from "@/hooks/use-modal";
import { useEditor } from "@/store/hooks";
import { ResumeLanguage } from "@/types/resume";
import Header from "../../common/header";
import CreateModal from "./create-modal";
import DeleteModal from "./delete-modal";
import Item from "./item";
import UpdateModal from "./update-modal";

type Props = {};

const LanguagesForm = (props: Props) => {
  const deleteModal = useModal<ResumeLanguage>();
  const updateModal = useModal<ResumeLanguage>();
  const { resume } = useEditor();

  // ----------------------------------------------------------------------

  return (
    <>
      <div className="flex items-center justify-between mb-10 gap-10">
        <Header
          title="Languages"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
        />
        <CreateModal />
      </div>

      <StateWrapper
        isLoading={!resume}
        isError={false}
        isEmpty={resume?.languages?.length === 0}
      >
        {resume?.languages && resume?.languages?.length > 0 && (
          <div className="flex flex-col gap-2">
            {resume?.languages.map((item) => (
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

export default LanguagesForm;
