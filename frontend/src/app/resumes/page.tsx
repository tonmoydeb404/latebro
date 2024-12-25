import ResumesView from "@/views/resumes/index/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resumes",
};

type Props = {};

const ResumesPage = (props: Props) => {
  return <ResumesView />;
};

export default ResumesPage;
