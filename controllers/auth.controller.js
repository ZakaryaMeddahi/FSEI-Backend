const Student = require('../models/Student');
const { BadRequestError, NotFoundError } = require('../utils/errors');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      error = new BadRequestError('Please provide an email and a password');
      return next(error);
    }

    const student = await Student.findOne({ email });

    if (!student) {
      error = new NotFoundError(`No account found with email: ${email}`);
      return next(error);
    }

    const isPasswordCorrect = await student.isValidPassword(password);

    if (!isPasswordCorrect) {
      const error = new BadRequestError('Invalid credentials');
      return next(error);
    }

    const token = student.generateToken();

    res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      data: { student, token },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  login,
};
