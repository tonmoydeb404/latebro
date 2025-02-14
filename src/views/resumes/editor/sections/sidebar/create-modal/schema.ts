import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Institute name is required"),
});

export type SchemaType = z.infer<typeof schema>;
export default schema;
