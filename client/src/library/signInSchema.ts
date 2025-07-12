import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().regex(/\S+@\S+\.\S+/, 'Please enter a valid email address'),
  password: z.string().regex(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])/, 'Passwords must contain at least one uppercase, and one lowercase letter, one number, and one special character.'),
})

export type SignInSchemaType = z.infer<typeof signInSchema>