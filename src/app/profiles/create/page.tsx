import ProfileCreateView from "@/views/profiles/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Profile",
};

type Props = {};

const ProfileCreatePage = (props: Props) => {
  return <ProfileCreateView />;
};

export default ProfileCreatePage;
