import { z } from "zod";

const schema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  position: z.string().min(1, "Position is required"),
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
});

export type ResumeExperience = z.infer<typeof schema>;

export default schema;
