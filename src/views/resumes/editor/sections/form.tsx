import { ScrollArea } from "@/components/ui/scroll-area";
import useScrollSpy from "@/hooks/use-scrollspy";
import { setNav } from "@/store/features/editor/slice";
import { useAppDispatch, useEditor } from "@/store/hooks";
import { useEffect } from "react";
import ContactForm from "./contact";
import EducationsForm from "./educations";
import ExperiencesForm from "./experiences";
import LanguagesForm from "./languages";
import ProfileForm from "./profile";
import ProjectsForm from "./projects";
import SkillsForm from "./skills";
import SocialsForm from "./socials";

type Props = {};

const Form = (props: Props) => {
  const dispatch = useAppDispatch();
  const { state } = useEditor();
  const { activeId, containerRef } = useScrollSpy<HTMLDivElement>();

  useEffect(() => {
    if (state === "IDLE") {
      const active = Number(activeId);
      if (!Number.isNaN(active)) {
        dispatch(setNav(active));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, state]);

  return (
    <ScrollArea className="w-full flex-1 scrollarea-with-spacing">
      <div className="flex flex-col px-5" ref={containerRef}>
        <div data-scrollspy="0" className="pt-10">
          <ProfileForm />
        </div>
        <div data-scrollspy="1" className="pt-16">
          <ContactForm />
        </div>
        <div data-scrollspy="2" className="pt-16">
          <EducationsForm />
        </div>
        <div data-scrollspy="3" className="pt-16">
          <ExperiencesForm />
        </div>
        <div data-scrollspy="4" className="pt-16">
          <ProjectsForm />
        </div>
        <div data-scrollspy="5" className="pt-16">
          <SkillsForm />
        </div>
        <div data-scrollspy="6" className="pt-16">
          <LanguagesForm />
        </div>
        <div data-scrollspy="7" className="pt-16 pb-16">
          <SocialsForm />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Form;
