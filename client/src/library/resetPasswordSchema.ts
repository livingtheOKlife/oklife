import { z } from 'zod'

export const resetPasswordSchema = z.object({
  password: z.string().regex(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])/, 'Passwords must contain at least one uppercase, and one lowercase letter, one number, and one special character.'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
})

export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>