import express from 'express'
import {
  createAccount,
  signIn,
  signOut,
} from '../controllers/auth.controllers.js'

const router = express.Router()

router.post('/create-account', createAccount)
router.post('/sign-out', signOut)
router.post('/sign-in', signIn)

export default router
