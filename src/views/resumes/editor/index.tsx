"use client";

import { useEditor } from "@/store/hooks";
import dynamic from "next/dynamic";
import { tabs } from "./config";
import Form from "./sections/form";
import Sidebar from "./sections/sidebar";
import Toolbar from "./sections/toolbar";
import Wrapper from "./wrapper";
const Preview = dynamic(() => import("./sections/preview/index"), {
  ssr: false,
  loading: () => <p>Loading Preview...</p>,
});

type Props = {};

const ProfileEditorView = (props: Props) => {
  const { tab } = useEditor();

  return (
    <Wrapper>
      <div className="w-full h-screen overflow-hidden flex flex-col">
        <Toolbar />
        <div className="w-full flex-1 overflow-hidden flex">
          <div
            style={{ display: tab === tabs[0].id ? "flex" : "none" }}
            className="flex border-r w-full lg:w-[450px] xl:w-[600px] shrink-0"
          >
            <Sidebar />
            <Form />
          </div>

          <div
            style={{ display: tab === tabs[1].id ? "block" : undefined }}
            className="flex-1 w-full hidden lg:block bg-slate-100"
          >
            <Preview />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfileEditorView;
