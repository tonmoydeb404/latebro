import { socialTypes } from "@/constants/resume";
import { z } from "zod";

export const ResumeSocialType = z.enum(
  Object.keys(socialTypes) as [
    keyof typeof socialTypes,
    ...Array<keyof typeof socialTypes>
  ]
);

const schema = z.object({
  type: ResumeSocialType,
  title: z.string().min(1, "Title is required"),
  url: z.string().url("Invalid URL"),
});

export type SchemaType = z.infer<typeof schema>;
export default schema;
