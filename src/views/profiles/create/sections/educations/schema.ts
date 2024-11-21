import { z } from "zod";

const schema = z.object({
  instituteName: z.string().min(1, "Institute name is required"),
  description: z.string().optional(),
  startedAt: z.date(),
  endedAt: z.date().optional(),
  isCurrent: z.boolean(),
  subject: z.string().min(1, "Subject is required"),
});

export type SchemaType = z.infer<typeof schema>;
export default schema;
