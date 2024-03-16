const errorHandler = (err, req, res, next) => {
  let customError = {
    message: err.message || 'Something went wrong in the server!',
    status: err.status || 500,
  };

  if (err.name === 'BadRequestError') {
    customError.message = err.message.split(',').map((msg) => msg.trim());
  }

  res
    .status(customError.status)
    .json({ status: 'error', message: customError.message });
};

module.exports = errorHandler;
