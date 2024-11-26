import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().optional(),
  previewUrl: z
    .string()
    .url("Invalid preview link")
    .optional()
    .or(z.literal("")),
  sourceUrl: z.string().url("Invalid source link").optional().or(z.literal("")),
  caseStudyUrl: z
    .string()
    .url("Invalid case study link")
    .optional()
    .or(z.literal("")),
  tools: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    })
  ),
});

export type SchemaType = z.infer<typeof schema>;
export default schema;
