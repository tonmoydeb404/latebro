import { z } from "zod";

const hexColorSchema = z.string().regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, {
  message: "Must be a valid hex color (3 or 6 characters).",
});

const schema = z.object({
  background: hexColorSchema,
  foreground: hexColorSchema,
  secondary: hexColorSchema,
  primary: hexColorSchema,
  muted: hexColorSchema,
});

export type SchemaType = z.infer<typeof schema>;
export default schema;
