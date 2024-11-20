import { z } from "zod";

const schema = z.object({
  _id: z.string(),
  instituteName: z.string().min(1, "Institute name is required"),
  description: z.string().optional(),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid start date",
  }),
  endDate: z
    .string()
    .nullable()
    .refine((date) => date === null || !isNaN(Date.parse(date)), {
      message: "Invalid end date",
    }),
  isCurrent: z.boolean(),
  subject: z.string().min(1, "Subject is required"),
});

export type SchemaType = z.infer<typeof schema>;
export default schema;
