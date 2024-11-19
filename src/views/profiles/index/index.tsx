import { Button } from "@/components/ui/button";
import { paths } from "@/router/paths";
import Link from "next/link";

type Props = {};

const ProfilesView = (props: Props) => {
  return (
    <div>
      <Button>
        <Link href={paths.profiles.create}>Create</Link>
      </Button>
    </div>
  );
};

export default ProfilesView;
