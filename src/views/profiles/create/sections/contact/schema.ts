import { z } from "zod";

const schema = z.object({
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email format"),
  address: z.string().min(1, "Address is required"),
  addressLink: z.string().url().nullable(),
  website: z.string().url("Invalid website URL"),
});

// TypeScript type inference from the schema
export type SchemaType = z.infer<typeof schema>;

export default schema;
