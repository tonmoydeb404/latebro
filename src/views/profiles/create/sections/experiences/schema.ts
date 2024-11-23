import { z } from "zod";

const schema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  position: z.string().min(1, "Position is required"),
  description: z.string(),
  startedAt: z.date(),
  endedAt: z.date().nullable(),
  isCurrent: z.boolean(),
});

export type SchemaType = z.infer<typeof schema>;

export default schema;
