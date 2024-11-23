"use client";

import Form from "./sections/form";
import Sidebar from "./sections/sidebar";

type Props = {};

const ProfileEditorView = (props: Props) => {
  return (
    <div className="w-full h-screen overflow-hidden flex">
      <div className="w-full flex-1 flex py-5 gap-5 pr-10 border-r">
        <Sidebar />
        <div className="w-full flex-1 mt-5">
          <Form />
        </div>
      </div>

      <div className="shrink-0 w-[700px] bg-slate-100"></div>
    </div>
  );
};

export default ProfileEditorView;
