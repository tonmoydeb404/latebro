import { z } from "zod";

const emailSchema = z.string().email("Invalid email format");

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(128, "Password must not exceed 128 characters")
  .regex(/[a-z]/, "Password must include at least one lowercase letter")
  .regex(/[A-Z]/, "Password must include at least one uppercase letter")
  .regex(/\d/, "Password must include at least one digit")
  .regex(/[\W_]/, "Password must include at least one special character")
  .refine((val) => !/\s/.test(val), "Password must not contain spaces");

const schema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SchemaType = z.infer<typeof schema>;
export default schema;
