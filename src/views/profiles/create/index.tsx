"use client";

import ProfileInfo from "./sections/profile";
import Sidebar from "./sections/sidebar";

type Props = {};

const ProfileCreateView = (props: Props) => {
  return (
    <div className="w-full h-screen overflow-hidden flex">
      <div className="w-full flex-1 flex py-5 gap-5 pr-10">
        <Sidebar />
        <div className="w-full flex-1 mt-5">
          {/* <h2 className="text-2xl mb-10 font-bold">{activeStep?.label}</h2> */}
          <ProfileInfo />
        </div>
      </div>

      <div className="shrink-0 w-[700px] bg-slate-100"></div>
    </div>
  );
};

export default ProfileCreateView;
