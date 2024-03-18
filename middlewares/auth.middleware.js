const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../utils/errors');

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedError(
        'Unauthorized, User credentials are not provided'
      );
    }
    const token = authHeader.split(' ')[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const { id, role } = decode;
    req.user = { id, role };
    next();
  } catch (err) {
    console.error(err);
    throw new UnauthorizedError('Unauthorized');
  }
};

module.exports = authMiddleware;
