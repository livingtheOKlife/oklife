import express from 'express'
import { createAccount, signOut } from '../controllers/auth.controllers.js'

const router = express.Router()

router.post('/create-account', createAccount)
router.post('/sign-out', signOut)

export default router
