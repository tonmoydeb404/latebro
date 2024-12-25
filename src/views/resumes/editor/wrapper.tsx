"use client";

import { hasApiError } from "@/helpers/api";
import { toast } from "@/hooks/use-toast";
import {
  setColors,
  setNav,
  setResume,
  setState,
  setTemplate,
  setTypographyFont,
  setTypographySize,
} from "@/store/features/editor/slice";
import { useLazyGetResumeQuery } from "@/store/features/resume/api";
import { useAppDispatch } from "@/store/hooks";
import { getTemplate } from "@/templates/resumes";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper = (props: Props) => {
  const { children } = props;
  const dispatch = useAppDispatch();
  const searchparams = useSearchParams();
  const queryResume = searchparams.get("resume");
  const queryNav = searchparams.get("nav");
  const templateId = searchparams.get("template");
  const [query, response] = useLazyGetResumeQuery();
  const { data, isSuccess } = response;

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

      dispatch(setState("ERROR"));
      return;
    }

    dispatch(setState("LOADED"));
  };

  // ----------------------------------------------------------------------

  useEffect(() => {
    if (queryResume) updateResume(queryResume);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryResume]);

  useEffect(() => {
    if (isSuccess) {
      const active = Number(queryNav);
      if (!Number.isNaN(active)) {
        dispatch(setNav(active));

        const element = document.querySelector(
          `div[data-scrollspy="${active}"]`
        );
        if (element) {
          dispatch(setState("NAVIGATING"));
          element.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => dispatch(setState("IDLE")), 1000);
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryNav, isSuccess]);

  useEffect(() => {
    if (data?.results) dispatch(setResume(data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (templateId) {
      const template = getTemplate(templateId);
      if (template) {
        dispatch(setTemplate(template));
        dispatch(setColors(template.theme.colors));
        dispatch(setTypographyFont(template.theme.fontFamily));
        dispatch(setTypographySize(template.theme.fontSizes));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [templateId]);

  return <>{children}</>;
};

export default Wrapper;