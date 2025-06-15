/**------------------------------ not found error middleware
 *
 * @name notFound
 * @function
 * @description create error for routes that are not found in the backend
 *
 * --------------- */

const notFound = (req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`)
  res.status(404)
  next(error)
}

/**------------------------------ error handler middleware
 *
 * @name errorHandler
 * @function
 * @description create new error template
 *
 * --------------- */

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode
  let message = err.message
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 204
    message = 'Resource not found'
  }
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }
