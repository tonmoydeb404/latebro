"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { hasApiError } from "@/helpers/api";
import { toast } from "@/hooks/use-toast";
import { setResume } from "@/store/features/editor/slice";
import { useLazyGetResumeQuery } from "@/store/features/resume/api";
import { useAppDispatch } from "@/store/hooks";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Form from "./sections/form";
import Sidebar from "./sections/sidebar";
const Preview = dynamic(() => import("./sections/preview/index"), {
  ssr: false,
  loading: () => <p>Loading Preview...</p>,
});

type Props = {};

const ProfileEditorView = (props: Props) => {
  const dispatch = useAppDispatch();
  const searchparams = useSearchParams();
  const resume = searchparams.get("resume");
  const [query, response] = useLazyGetResumeQuery();
  const { data } = response;

  const updateResume = async (id: string) => {
    const response = await query(id);

    if (response.error || !response.data?.results) {
      console.error("Resume Fetching Error: ", response);

      let message = "Something wents to wrong!";
      if (hasApiError(response.error)) {
        message = response.error.data.message;
      }
      toast({
        title: message,
        variant: "destructive",
      });

      return;
    }

    toast({ title: "Resume updated!" });
  };

  // ----------------------------------------------------------------------

  useEffect(() => {
    if (resume) updateResume(resume);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resume]);

  useEffect(() => {
    if (data?.results) dispatch(setResume(data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="w-full h-screen overflow-hidden flex">
      <div className="w-full flex-1 flex border-r">
        <Sidebar />
        <div className="w-full flex-1">
          <Form />
        </div>
      </div>

      <ScrollArea className="shrink-0 w-[700px] bg-slate-100">
        <Preview />
      </ScrollArea>
    </div>
  );
};

export default ProfileEditorView;
