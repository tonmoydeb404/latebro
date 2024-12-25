import { z } from "zod";

const emailSchema = z.string().email("Invalid email format");

const passwordSchema = z.string();

const schema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SchemaType = z.infer<typeof schema>;
export default schema;
