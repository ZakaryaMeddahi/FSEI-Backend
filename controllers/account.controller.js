const Student = require('../models/Student');
const { NotFoundError } = require('../utils/errors');

const getAccount = async (req, res, next) => {
  try {
    const { id } = req.user;
    const student = await Student.findById(id);
    if (!student) {
      const error = new NotFoundError('Account not found');
      return next(error);
    }
    const { password, ...rest } = student._doc;
    res.status(200).json({
      status: 'success',
      message: 'Account retrieved successfully',
      data: rest,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAccount,
};
