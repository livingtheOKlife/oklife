import express from 'express'
import {
  createAccount,
  forgotPassword,
  resendVerificationEmail,
  signIn,
  signOut,
  verifyAccount,
} from '../controllers/auth.controllers.js'

const router = express.Router()

router.post('/create-account', createAccount)
router.post('/sign-out', signOut)
router.post('/sign-in', signIn)
router.post('/verify-account', verifyAccount)
router.post('/resend-verification-email', resendVerificationEmail)
router.post('/forgot-password', forgotPassword)

export default router
