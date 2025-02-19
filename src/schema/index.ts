import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
