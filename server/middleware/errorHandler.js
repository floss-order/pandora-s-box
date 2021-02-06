const api = require('../lib/api')

function errorHandler(error, req, res, next) {
    const { analytics = {} } = error.meta || {}
  // logging for analytics
//   console.log({ analytics })
  
  if (error instanceof api.error.ApplicationError) {
    const code = error.statusCode || 500
    return res.status(code).json(api.response.formatError(error))
  }

  if (error instanceof Error) {
    const newError = api.error.createError(error)
    const code = newError.statusCode || 500
    return res.status(code).json(api.response.formatError(newError))
  }
  
  const unknownError = new api.error.ApplicationError(api.error.commonErrors.UNKNOWN_ERROR)

  return api.response.sendResponse(res, unknownError, unknownError.statusCode)
}

module.exports = errorHandler