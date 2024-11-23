import { Button } from "@/components/ui/button";
import { paths } from "@/router/paths";
import Link from "next/link";

type Props = {};

const ResumesView = (props: Props) => {
  return (
    <div>
      <Button>
        <Link href={paths.resumes.editor}>Create</Link>
      </Button>
    </div>
  );
};

export default ResumesView;
