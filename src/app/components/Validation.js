import { z } from "zod";

export const signupSchema = z.object({

    name: z.string()
    .min(2, "Name must be at least 2 characters"),

    email : z.string()
    .email("must be a valid email"),

    password: z.string()
    .min(6, "MInimum 6 characters required")
    .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    "Password must contain at least one uppercase, one lowercase, one number, and one special character"
  ),

  confirmPassword: z.string()
 }).refine((data) => data.password === data.confirmPassword , {
    path: ["confirmPassword"],
    message: "Passwords do not match",
 });
