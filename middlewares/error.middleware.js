const errorHandler = (err, req, res, next) => {
  let customError = {
    message: err.message || 'Something went wrong in the server!',
    status: err.status || 500,
  };

  if (err.name === 'BadRequestError') {
    const messages = err.message.split(',');
    messages.length > 1
      ? (customError.message = messages.map((msg) => msg.trim()))
      : (customError.message = messages[0]);
  }

  res
    .status(customError.status)
    .json({ status: 'error', message: customError.message });
};

module.exports = errorHandler;
