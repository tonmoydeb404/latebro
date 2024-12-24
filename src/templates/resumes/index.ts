import { Template } from "@/types/template";
import template1Config from "./template-1/config";
import template2Config from "./template-2/config";
import template3Config from "./template-3/config";

const templatePaths = {
  "1": () => import("@/templates/resumes/template-1"),
  "2": () => import("@/templates/resumes/template-2"),
  "3": () => import("@/templates/resumes/template-3"),
};

const templates: Template[] = [
  template1Config,
  template2Config,
  template3Config,
  // {
  //   id: "4",
  //   title: "Template 4",
  //   text: "",
  //   import: () => import("@/templates/resumes/template-4"),
  // },
  // {
  //   id: "5",
  //   title: "Template 5",
  //   text: "",
  //   import: () => import("@/templates/resumes/template-5"),
  // },
  // {
  //   id: "6",
  //   title: "Template 6",
  //   text: "",
  //   import: () => import("@/templates/resumes/template-6"),
  // },
  // {
  //   id: "7",
  //   title: "Template 7",
  //   text: "",
  //   import: () => import("@/templates/resumes/template-7"),
  // },
  // {
  //   id: "8",
  //   title: "Template 8",
  //   text: "",
  //   import: () => import("@/templates/resumes/template-8"),
  // },
  // {
  //   id: "9",
  //   title: "Template 9",
  //   text: "",
  //   import: () => import("@/templates/resumes/template-9"),
  // },
];

export const getTemplate = (id: string) => templates.find((t) => t.id === id);
export const getTemplatePath = (id: string) =>
  templatePaths[id as keyof typeof templatePaths];

export default templates;
