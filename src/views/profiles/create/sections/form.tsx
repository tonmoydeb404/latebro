import { useEditor } from "@/store/hooks";
import ContactForm from "./contact";
import EducationsForm from "./educations";
import ProfileForm from "./profile";

type Props = {};

const Form = (props: Props) => {
  const { nav } = useEditor();
  return (
    <>
      {nav === 0 && <ProfileForm />}
      {nav === 1 && <ContactForm />}
      {nav === 2 && <EducationsForm />}
    </>
  );
};

export default Form;
