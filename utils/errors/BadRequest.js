const {StatusCodes} = require('http-status-codes');

class BadRequestError extends CustomError {
  constructor(message) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

module.exports = BadRequestError;