import { z } from "zod";

const emailSchema = z.string().email("Invalid email format");

const passwordSchema = z.string();

const schema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

export type SchemaType = z.infer<typeof schema>;
export default schema;
