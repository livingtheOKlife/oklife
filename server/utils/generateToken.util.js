import jwt from 'jsonwebtoken'

/**------------------------------ generate token utility
 *
 * @name generateToken
 * @function
 * @requires jsonwebtoken
 * @description create jwt from userId and jwt secret
 *
 * --------------- */

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 1 * 24 * 60 * 60 * 1000,
  })
}

export default generateToken
