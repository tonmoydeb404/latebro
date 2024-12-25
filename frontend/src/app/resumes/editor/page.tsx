import ResumeEditorView from "@/views/resumes/editor";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Resume Editor",
};

type Props = {};

const ResumeCreatePage = (props: Props) => {
  return (
    <Suspense>
      <ResumeEditorView />
    </Suspense>
  );
};

export default ResumeCreatePage;
