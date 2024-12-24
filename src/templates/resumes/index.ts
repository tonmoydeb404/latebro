type Template = {
  title: string;
  text: string;
  import: () => Promise<any>;
  id: string;
};

const templates: Template[] = [
  {
    id: "1",
    title: "Template 1",
    text: "",
    import: () => import("@/templates/resumes/template-1"),
  },
  {
    id: "2",
    title: "Template 2",
    text: "",
    import: () => import("@/templates/resumes/template-2"),
  },
  {
    id: "3",
    title: "Template 3",
    text: "",
    import: () => import("@/templates/resumes/template-3"),
  },
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

export default templates;
