"use client";

import { hasApiError } from "@/helpers/api";
import { toast } from "@/hooks/use-toast";
import { setResume } from "@/store/features/editor/slice";
import { useLazyGetResumeQuery } from "@/store/features/resume/api";
import { useAppDispatch } from "@/store/hooks";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper = (props: Props) => {
  const { children } = props;
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

  return <>{children}</>;
};

export default Wrapper;
