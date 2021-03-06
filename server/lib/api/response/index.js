const error = require('../error') 

function formatError(error, overrides = {}) {
  // `Error.stack`'s `enumerable` property descriptor is `false`
  // Thus, `JSON.stringify(...)` doesn't enumerate over it.
  const stackTrace = JSON.stringify(error, ['stack'], 4) || {}
  const newError = JSON.parse(JSON.stringify(error))

  // No need to send to client
  newError.statusCode = undefined
  delete newError.meta

  return {
    error: {
      ...newError,
      stack: stackTrace.stack
    },
    success: false,
    ...overrides
  }
}

function formatResponse(result, override = {}) {
  return {
    data: result,
    success: true,
    ...override
  }
}

function sendResponse(res, payload, statusCode = 200, context = {}) {
  if (payload instanceof error.ApplicationError) {
    const code = payload.statusCode || 500
    return res.status(code).json(formatError(payload))
  }

  if (payload instanceof Error) {
    const newError = error.createError(payload)
    const code = newError.statusCode || 500
    return res.status(code).json(formatError(newError))
  }

  return res.status(statusCode).json(formatResponse(payload))
}

module.exports = {
  formatError,
  formatResponse,
  sendResponse
}