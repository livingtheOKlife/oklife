import { z } from 'zod'

export const createAccountSchema = z.object({
  username: z.string().regex(/^(?=[\w.-])(?:[\d_.-]*[a-zA-Z])[\w.-]*$/, 'Usernames must contain at least one letter, and can only contain letters, numbers, and _ . -'),
  email: z.string().regex(/\S+@\S+\.\S+/, 'Please enter a valid email address'),
  password: z.string().regex(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])/, 'Passwords must contain at least one uppercase, and one lowercase letter, one number, and one special character.'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
})

export type CreateAccountSchemaType = z.infer<typeof createAccountSchema>