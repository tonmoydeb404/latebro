import { z } from "zod";

const schema = z.object({
  phone: z.string().min(1, "Phone is required").or(z.literal("")).optional(),
  email: z.string().email("Invalid email format").or(z.literal("")).optional(),
  address: z
    .string()
    .min(1, "Address is required")
    .or(z.literal(""))
    .optional(),
  address_link: z.string().url().or(z.literal("")).optional(),
  website: z.string().url("Invalid website URL").or(z.literal("")).optional(),
});

// TypeScript type inference from the schema
export type SchemaType = z.infer<typeof schema>;

export default schema;
