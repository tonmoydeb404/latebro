import ResumeEditorView from "@/views/resumes/editor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Editor",
};

type Props = {};

const ResumeCreatePage = (props: Props) => {
  return <ResumeEditorView />;
};

export default ResumeCreatePage;
