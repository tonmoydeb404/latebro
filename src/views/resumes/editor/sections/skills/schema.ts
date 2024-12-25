import { skillExperiences } from "@/constants/resume";
import { z } from "zod";

export const ResumeSkillExperience = z.enum(
  Object.keys(skillExperiences) as [
    keyof typeof skillExperiences,
    ...Array<keyof typeof skillExperiences>
  ]
);

const schema = z.object({
  title: z.string().min(1, "Skill title is required"),
  experience: ResumeSkillExperience,
});

export type SchemaType = z.infer<typeof schema>;

export default schema;
