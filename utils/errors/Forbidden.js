const { StatusCodes } = require("http-status-codes");
const CustomError = require("./CustomError");

class ForbiddenError extends CustomError {
  constructor(message = 'Forbidden') {
    super(message, StatusCodes.FORBIDDEN);
  }
}

module.exports = ForbiddenError;