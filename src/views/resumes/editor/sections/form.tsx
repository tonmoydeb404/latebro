import { ScrollArea } from "@/components/ui/scroll-area";
import { useEditor } from "@/store/hooks";
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
  const { nav } = useEditor();

  return (
    <ScrollArea className="w-full flex-1 scrollarea-with-spacing">
      <div className="flex flex-col gap-16 p-5">
        <ProfileForm />
        <ContactForm />
        <EducationsForm />
        <ExperiencesForm />
        <ProjectsForm />
        <SkillsForm />
        <LanguagesForm />
        <SocialsForm />
      </div>
    </ScrollArea>
  );
};

export default Form;
