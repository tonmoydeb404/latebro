import { z } from "zod";

export const ResumeSocialType = z.enum([
  "codepen",
  "github",
  "dribble",
  "linkedin",
  "medium",
  "gitlab",
  "x",
  "tableau",
  "stackoverflow",
  "repl_it",
  "behance",
  "hashnode",
  "dev_to",
  "instagram",
  "youtube",
  "facebook",
]);

const schema = z.object({
  _id: z.string(),
  type: ResumeSocialType,
  title: z.string().min(1, "Title is required"),
  url: z.string().url("Invalid URL"),
});

export type ResumeSocial = z.infer<typeof schema>;
export default schema;
