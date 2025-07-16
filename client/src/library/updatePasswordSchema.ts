import { z } from 'zod'

export const updatePasswordSchema = z.object({
  currentPassword: z.string().regex(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])/, 'Passwords must contain at least one uppercase, and one lowercase letter, one number, and one special character.'),
  newPassword: z.string().regex(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])/, 'Passwords must contain at least one uppercase, and one lowercase letter, one number, and one special character.'),
  confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
})

export type UpdatePasswordSchemaType = z.infer<typeof updatePasswordSchema>