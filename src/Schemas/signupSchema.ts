import { string, z } from "zod";

export const usernameValidation = z.string().min(2).max(20).regex(/^[a-zA-Z0-9_]+$/, "username must not contain any special character" )

export const signupSchema = z.object({
    username: usernameValidation,
    email: z.string().email({
        message: "invalid email address"
    }),
    password: z.string().min(6, "password must be atleast 6 characters")
    

})
