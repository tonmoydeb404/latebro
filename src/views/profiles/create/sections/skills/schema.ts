import { z } from "zod";

export const ResumeSkillExperience = z.enum([
  "Beginner",
  "Junior",
  "Mid-level",
  "Senior",
  "Expert",
]);

const schema = z.object({
  _id: z.string(),
  title: z.string().min(1, "Skill title is required"),
  experience: ResumeSkillExperience,
});

export type ResumeSkill = z.infer<typeof schema>;

export default schema;
