import crypto from 'crypto'
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

export const createAccount = async (req, res) => {
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

/**------------------------------ sign out endpoint
 *
 * @name signOut
 * @function
 * @async
 * @method POST /api/auth/sign-out
 * @access Public
 * @description endpoint function for signing out
 *
 * --------------- */

export const signOut = async (req, res) => {
  try {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    })
    res
      .status(200)
      .json({ success: true, message: 'User logged out successfully' })
  } catch (error) {
    res.status(500)
    throw new Error(error)
  }
}

/**------------------------------ sign in endpoint
 *
 * @name signIn
 * @function
 * @async
 * @method POST /api/auth/sign-in
 * @access Public
 * @requires User model
 * @requires generateToken utility function
 * @description endpoint function for signing in
 *
 * --------------- */

export const signIn = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) {
      res.status(400)
      throw new Error('All fields are required')
    }
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id)
      res.status(200).json({
        success: true,
        message: 'User logged in',
        user: {
          ...user._doc,
          password: undefined,
        },
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
}

/**------------------------------ verify account endpoint
 *
 * @name verifyAccount
 * @function
 * @async
 * @method POST /api/auth/verify-account
 * @access Public
 * @requires User model
 * @requires emailTransporter
 * @description endpoint function for email verification
 *
 * --------------- */

export const verifyAccount = async (req, res) => {
  const { email, token } = req.body
  try {
    const user = await User.findOne({ verificationToken: token })
    if (!user || user.email !== email) {
      res.status(400)
      throw new Error('Invalid or expired verification code')
    } else {
      user.isVerified = true
      user.verificationToken = undefined
      user.verificationExpiry = undefined
      await user.save()
      await emailTransporter.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: `Welcome, ${user.username}, to the OKlife!`,
        html: `<span>Thank you for joining us!</span>`,
      })
      res.status(200).json({
        success: true,
        message: 'Email successfully verified',
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

/**------------------------------ resend verification email endpoint
 *
 * @name resendVerificationEmail
 * @function
 * @async
 * @method POST /api/auth/resend-verification-email
 * @access Public
 * @requires User model
 * @requires emailTransporter
 * @description endpoint function for resending verification email
 *
 * --------------- */

export const resendVerificationEmail = async (req, res) => {
  const { email } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      res.status(404)
      throw new Error('User not found')
    } else if (user.isVerified) {
      res.status(400)
      throw new Error('User is already verified')
    } else {
      const token = Math.floor(100000 + Math.random() * 900000).toString()
      user.verificationToken = token
      user.verificationExpiry = Date.now() + 24 * 60 * 60 * 1000
      await user.save()
      await emailTransporter.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: 'Verify your email',
        html: `<span>Your verification token is ${token}</span>`,
      })
      res.status(200).json({
        success: true,
        message: 'Verification code sent successfully',
        user: {
          ...user._doc,
          password: undefined,
        },
      })
    }
  } catch (error) {
    res.status(500)
    throw new Error(error)
  }
}

/**------------------------------ forgotten password endpoint
 *
 * @name forgotPassword
 * @function
 * @async
 * @method POST /api/auth/forgot-password
 * @access Public
 * @requires User model
 * @requires crypto
 * @requires emailTransporter
 * @description endpoint function for forgotten password
 *
 * --------------- */

export const forgotPassword = async (req, res) => {
  const { email } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      res.status(404)
      throw new Error('User not found')
    } else {
      const resetToken = crypto.randomBytes(20).toString('hex')
      user.passwordResetToken = resetToken
      user.passwordResetExpiry = Date.now() + 1 * 60 * 60 * 1000
      await user.save()
      await emailTransporter.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: 'Reset your password',
        html: `
          <a href="${process.env.CLIENT_URL}/reset-password/${resetToken}">Reset your password</a>
        `,
      })
      res.status(200).json({
        success: true,
        message: 'A password reset link has been sent to you',
      })
    }
  } catch (error) {
    res.status(500)
    throw new Error(error)
  }
}

/**------------------------------ reset password endpoint
 *
 * @name resetPassword
 * @function
 * @async
 * @method POST /api/auth/reset-password
 * @access Public
 * @requires User model
 * @requires generateToken
 * @requires emailTransporter
 * @description endpoint function for resetting password
 *
 * --------------- */

export const resetPassword = async (req, res) => {
  const { token } = req.params
  const { password } = req.body
  try {
    const user = await User.findOne({ passwordResetToken: token })
    if (!user || user.passwordResetToken === undefined) {
      res.status(400)
      throw new Error('Invalid user data')
    } else {
      user.password = password
      user.passwordResetToken = undefined
      user.passwordResetExpiry = undefined
      await user.save()
      generateToken(res, user._id)
      await emailTransporter.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: user.email,
        subject: 'Password reset successful',
        html: `<span>Your password was reset successfully</span>`,
      })
      res.status(200).json({
        success: true,
        message: 'Password reset successfully',
      })
    }
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
}

/**------------------------------ update password endpoint
 *
 * @name updatePassword
 * @function
 * @async
 * @method POST /api/auth/update-password
 * @access Public
 * @requires User model
 * @requires generateToken
 * @description endpoint function for updating passwords
 *
 * --------------- */

export const updatePassword = async (req, res) => {
  const { userId, currentPassword, newPassword } = req.body
  try {
    const user = await User.findById(userId)
    if (!user) {
      res.status(404)
      throw new Error('User not found')
    } else if (!(await user.matchPassword(currentPassword))) {
      res.status(409)
      throw new Error('Invalid user data')
    } else if (await user.matchPassword(newPassword)) {
      res.status(400)
      throw new Error('Your password cannot match your old password')
    } else {
      user.password = newPassword
      await user.save()
      generateToken(res, user._id)
      res.status(200).json({
        success: true,
        message: 'Password updated successfully',
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
