import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLazyListEducationQuery } from "@/store/features/resume/education/api";
import { LucideEdit, LucideTrash } from "lucide-react";
import moment from "moment";
import { useEffect } from "react";
import Header from "../../common/header";
import CreateModal from "./create-modal";

type Props = {};

const EducationsForm = (props: Props) => {
  const [listEducation, { data }] = useLazyListEducationQuery();

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

      {data?.results && data.results?.items?.length > 0 && (
        <div>
          {data.results.items.map((item) => (
            <Card key={item._id}>
              <CardHeader>
                <CardTitle className="text-lg">{item.instituteName}</CardTitle>
                <div className="flex items-center !mt-0">
                  <span className="text-sm mr-4">{item.subject}</span>
                  <span className="text-sm mr-1">
                    {moment(item.startedAt).format("ll")}
                  </span>
                  <span className="text-sm mr-1">-</span>
                  <span className="text-sm mr-1">
                    {moment(item.endedAt).format("ll")}
                  </span>
                </div>
                <CardDescription>
                  {item.description} Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Dolore, expedita?
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-end gap-2">
                <Button size={"icon"} variant={"ghost"}>
                  <LucideTrash />
                </Button>
                <Button size={"icon"} variant={"ghost"}>
                  <LucideEdit />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {data?.results?.items?.length === 0 && (
        <div className="border border-dashed h-20 flex flex-col items-center justify-center text-center">
          <span className="text-xs uppercase text-muted-foreground">
            currently nothing
          </span>
        </div>
      )}

      <div className="flex flex-col gap-4 mb-16"></div>
    </>
  );
};

export default EducationsForm;
