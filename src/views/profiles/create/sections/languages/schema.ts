import { languageExperiences } from "@/constants/resume";
import { z } from "zod";

export const ResumeLanguageExperience = z.enum(
  Object.keys(languageExperiences) as [
    keyof typeof languageExperiences,
    ...Array<keyof typeof languageExperiences>
  ]
);

const schema = z.object({
  title: z.string().min(1, "Language title is required"),
  experience: ResumeLanguageExperience,
});

export type SchemaType = z.infer<typeof schema>;
export default schema;
