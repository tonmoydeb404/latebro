import { StateWrapper } from "@/components/common/state";
import { useLazyListEducationQuery } from "@/store/features/resume/education/api";
import { useEffect } from "react";
import Header from "../../common/header";
import CreateModal from "./create-modal";
import Item from "./item";

type Props = {};

const EducationsForm = (props: Props) => {
  const [listEducation, { data, isLoading, isError }] =
    useLazyListEducationQuery();

  useEffect(() => {
    listEducation("673e9e56e96cb7bb8646a68d");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ----------------------------------------------------------------------

  return (
    <>
      <div className="flex items-center justify-between mb-10 gap-10">
        <Header
          title="Educations"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
        />
        <CreateModal />
      </div>

      <StateWrapper
        isLoading={isLoading}
        isError={isError}
        isEmpty={data?.results?.items?.length === 0}
      >
        {data?.results && data.results?.items?.length > 0 && (
          <div>
            {data.results.items.map((item) => (
              <Item key={item._id} data={item} />
            ))}
          </div>
        )}
      </StateWrapper>
    </>
  );
};

export default EducationsForm;
