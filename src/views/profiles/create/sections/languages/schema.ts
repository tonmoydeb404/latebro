import { z } from "zod";

export const ResumeLanguageExperience = z.enum([
  "Native",
  "Fluent",
  "Proficient",
  "Basic",
]);

const schema = z.object({
  _id: z.string(),
  title: z.string().min(1, "Language title is required"),
  experience: ResumeLanguageExperience,
});

export type ResumeLanguage = z.infer<typeof schema>;
export default schema;
