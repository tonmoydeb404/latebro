import { z } from "zod";

const schema = z.object({
  phone: z.string().min(1, "Phone is required").optional(),
  email: z.string().email("Invalid email format").optional(),
  address: z.string().min(1, "Address is required").optional(),
  address_link: z.string().url().optional(),
  website: z.string().url("Invalid website URL").optional(),
});

// TypeScript type inference from the schema
export type SchemaType = z.infer<typeof schema>;

export default schema;
