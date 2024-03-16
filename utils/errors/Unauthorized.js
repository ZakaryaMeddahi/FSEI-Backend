const { StatusCodes } = require('http-status-codes');

class UnauthorizedError extends Error {
  constructor(message) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

module.exports = UnauthorizedError;
