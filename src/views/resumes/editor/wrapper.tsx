"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogOverlay,
} from "@/components/ui/dialog";
import { hasApiError } from "@/helpers/api";
import { toast } from "@/hooks/use-toast";
import { paths } from "@/router/paths";
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
import { useLazyGetContactQuery } from "@/store/features/resume/contact/api";
import { useLazyListEducationQuery } from "@/store/features/resume/education/api";
import { useLazyListExperienceQuery } from "@/store/features/resume/experience/api";
import { useLazyListLanguageQuery } from "@/store/features/resume/language/api";
import { useLazyGetProfileQuery } from "@/store/features/resume/profile/api";
import { useLazyListProjectQuery } from "@/store/features/resume/project/api";
import { useLazyListSkillQuery } from "@/store/features/resume/skill/api";
import { useLazyListSocialQuery } from "@/store/features/resume/social/api";
import { useAppDispatch } from "@/store/hooks";
import { getTemplate } from "@/templates/resumes";
import { EditorSlice } from "@/types/editor";
import { LucideAlertOctagon } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useMemo } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper = (props: Props) => {
  const { children } = props;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchparams = useSearchParams();

  const queryResume = searchparams.get("resume");
  const queryNav = searchparams.get("nav");
  const queryTemplate = searchparams.get("template");

  const [query, response] = useLazyGetResumeQuery();
  const [contactQuery, contactResponse] = useLazyGetContactQuery();
  const [profileQuery, profileResponse] = useLazyGetProfileQuery();
  const [educationsQuery, educationsResponse] = useLazyListEducationQuery();
  const [experiencesQuery, experiencesResponse] = useLazyListExperienceQuery();
  const [languagesQuery, languagesResponse] = useLazyListLanguageQuery();
  const [projectsQuery, projectsResponse] = useLazyListProjectQuery();
  const [skillsQuery, skillsResponse] = useLazyListSkillQuery();
  const [socialsQuery, socialsResponse] = useLazyListSocialQuery();

  const isSuccess =
    response.isSuccess ||
    contactResponse.isSuccess ||
    profileResponse.isSuccess ||
    educationsResponse.isSuccess ||
    experiencesResponse.isSuccess ||
    languagesResponse.isSuccess ||
    projectsResponse.isSuccess ||
    skillsResponse.isSuccess ||
    socialsResponse.isSuccess;

  const isError =
    response.isError ||
    contactResponse.isError ||
    profileResponse.isError ||
    educationsResponse.isError ||
    experiencesResponse.isError ||
    languagesResponse.isError ||
    projectsResponse.isError ||
    skillsResponse.isError ||
    socialsResponse.isError;

  const updateResume = async (id: string) => {
    const response = await query(id);

    if (response.error || !response.data) {
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

    await contactQuery(id);
    await profileQuery(id);
    await educationsQuery(id);
    await experiencesQuery(id);
    await languagesQuery(id);
    await projectsQuery(id);
    await skillsQuery(id);
    await socialsQuery(id);

    dispatch(setState("LOADED"));
  };

  const resume = useMemo<EditorSlice["resume"]>(() => {
    if (
      !response?.data ||
      !contactResponse?.data ||
      !profileResponse?.data ||
      !Array.isArray(educationsResponse?.data) ||
      !Array.isArray(experiencesResponse?.data) ||
      !Array.isArray(languagesResponse?.data) ||
      !Array.isArray(projectsResponse?.data) ||
      !Array.isArray(skillsResponse?.data) ||
      !Array.isArray(socialsResponse?.data)
    ) {
      return null;
    }

    return {
      _id: response.data._id,
      title: response.data.title,
      contact: contactResponse.data,
      profile: profileResponse.data,
      educations: educationsResponse.data,
      experiences: experiencesResponse.data,
      languages: languagesResponse.data,
      projects: projectsResponse.data,
      skills: skillsResponse.data,
      socials: socialsResponse.data,
    };
  }, [
    response?.data,
    contactResponse?.data,
    profileResponse?.data,
    educationsResponse?.data,
    experiencesResponse?.data,
    languagesResponse?.data,
    projectsResponse?.data,
    skillsResponse?.data,
    socialsResponse?.data,
  ]);

  // ----------------------------------------------------------------------

  useEffect(() => {
    const template = queryTemplate ? getTemplate(queryTemplate) : null;
    if (template) {
      dispatch(setTemplate(template));
      dispatch(setColors(template.theme.colors));
      dispatch(setTypographyFont(template.theme.fontFamily));
      dispatch(setTypographySize(template.theme.fontSizes));
    } else {
      router.replace(paths.resumes.root);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryTemplate]);

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
    if (resume) dispatch(setResume(resume));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resume]);

  return (
    <>
      {children}

      <Dialog open={isError}>
        <DialogContent hideCloseButton overlay={<DialogOverlay />}>
          <div>
            <LucideAlertOctagon className="text-destructive mb-3" />
            <h3 className="mb-5">
              While processing you&apos;re request, something went to wrong
            </h3>
          </div>
          <DialogFooter>
            <Button size={"sm"} variant={"outline"} asChild>
              <Link href={paths.resumes.root}>Templates</Link>
            </Button>

            <Button size={"sm"} onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Wrapper;
