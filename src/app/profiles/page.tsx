import ProfilesView from "@/views/profiles/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profiles",
};

type Props = {};

const ProfilesPage = (props: Props) => {
  return <ProfilesView />;
};

export default ProfilesPage;
