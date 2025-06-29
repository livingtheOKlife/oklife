import emailTransporter from '../middleware/email.middleware.js'
import User from '../models/user.model.js'
import generateToken from '../utils/generateToken.util.js'

/**------------------------------ create account endpoint
 *
 * @name createAccount
 * @function
 * @async
 * @method POST /api/auth/create-account
 * @access Public
 * @requires User model
 * @requires generateToken
 * @requires emailTransporter
 * @description endpoint function for account creation
 *
 * --------------- */

const createAccount = async (req, res) => {
  const { username, email, password } = req.body
  try {
    if (!username || !email || !password) {
      res.status(400)
      throw new Error('All fields are required')
    }
    const emailExists = await User.findOne({ email })
    if (emailExists) {
      res.status(409)
      throw new Error('This email is already in use, try signing in...')
    }
    const usernameExists = await User.findOne({ username })
    if (usernameExists) {
      res.status(409)
      throw new Error('That username is already in use, please try again...')
    }
    const token = Math.floor(100000 + Math.random() * 900000).toString()
    const user = await User.create({
      username,
      email,
      password,
      verificationToken: token,
      verificationExpiry: Date.now() + 24 * 60 * 60 * 1000,
    })
    if (user) {
      generateToken(res, user._id)
      await emailTransporter.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: 'Verify your email',
        html: `<span>Your verification token is ${token}</span>`,
      })
      res.status(201).json({
        success: true,
        message: 'Account created successfully',
        user: {
          ...user._doc,
          password: undefined,
        },
      })
    }
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
}

export { createAccount }
