import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

/**------------------------------ email middleware
 *
 * @name sendEmail
 * @requires nodemailer
 * @requires dotenv
 * @description handles sending emails
 *
 * --------------- */

const sendEmail = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export default sendEmail
