import { z } from "zod";

const schema = z.object({
  _id: z.string(),
  name: z.string().min(1, "Project name is required"),
  description: z.string().optional(),
  previewLink: z.string().url("Invalid preview link"),
  sourceLink: z.string().url("Invalid source link"),
  caseStudyLink: z.string().url("Invalid case study link").optional(),
  tools: z.string().optional(),
});

export type ResumeProject = z.infer<typeof schema>;
export default schema;
