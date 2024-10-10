import { z } from "zod";

export const MessageSchema = z.object({
  content: z
    .string()
    .min(10, "content must be atleast 10 char long")
    .max(300, "content must be atleast 10 char long"),
});
