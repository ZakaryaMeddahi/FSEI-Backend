const { ForbiddenError } = require('../utils/errors');

const adminMiddleware = (req, res, next) => {
  try {
    const { role } = req.user;

    if (role !== 'admin') {
      const error = new ForbiddenError('Access denied');
      return next(error);
    }

    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = adminMiddleware;
