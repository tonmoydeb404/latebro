import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required."),
  profession: z.string().min(1, "Profession is required.").optional(),
  bio: z.string().min(1, "Bio is required.").optional(),
  avatar: z.string().nullable(),
});

export type SchemaType = z.infer<typeof schema>;
export default schema;
