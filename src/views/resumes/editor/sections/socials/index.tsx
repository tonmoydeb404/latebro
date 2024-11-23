import { StateWrapper } from "@/components/common/state";
import useModal from "@/hooks/use-modal";
import { useLazyListSocialQuery } from "@/store/features/resume/social/api";
import { ResumeSocial } from "@/types/resume";
import { useEffect } from "react";
import Header from "../../common/header";
import CreateModal from "./create-modal";
import DeleteModal from "./delete-modal";
import Item from "./item";
import UpdateModal from "./update-modal";

type Props = {};

const SocialsForm = (props: Props) => {
  const deleteModal = useModal<ResumeSocial>();
  const updateModal = useModal<ResumeSocial>();
  const [query, response] = useLazyListSocialQuery();
  const { data, isLoading, isError } = response;

  useEffect(() => {
    query("673e9e56e96cb7bb8646a68d");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ----------------------------------------------------------------------

  return (
    <>
      <div className="flex items-center justify-between mb-10 gap-10">
        <Header
          title="Socials"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
        />
        <CreateModal />
      </div>

      <StateWrapper
        isLoading={isLoading}
        isError={isError}
        isEmpty={data?.results?.length === 0}
      >
        {data?.results && data.results?.length > 0 && (
          <div className="flex flex-col gap-2">
            {data.results.map((item) => (
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

export default SocialsForm;
