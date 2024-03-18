const CustomError = require('./CustomError');
const NotFoundError = require('./NotFound');
const BadRequestError = require('./BadRequest');
const UnauthorizedError = require('./Unauthorized');
const ForbiddenError = require('./Forbidden');

module.exports = {
  CustomError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError
};
