import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().optional(),
  previewUrl: z.string().url("Invalid preview link").optional(),
  sourceUrl: z.string().url("Invalid source link").optional(),
  caseStudyUrl: z.string().url("Invalid case study link").optional(),
  tools: z.array(z.string()),
});

export type SchemaType = z.infer<typeof schema>;
export default schema;
