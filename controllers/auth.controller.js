const generateToken = require('../helpers/generateToken');
const isValidPassword = require('../helpers/isValidPassword');
const Admin = require('../models/Admin');
const Student = require('../models/Student');
const { BadRequestError, NotFoundError } = require('../utils/errors');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let role = 'student';
    let user;

    if (!email || !password) {
      error = new BadRequestError('Please provide an email and a password');
      return next(error);
    }

    user = await Admin.findOne({ email });

    if (user) {
      role = 'admin';
    } else {
      user = await Student.findOne({ email });
    }

    if (!user) {
      error = new NotFoundError(`No account found with email: ${email}`);
      return next(error);
    }

    const isPasswordCorrect = await isValidPassword(password, user.password);

    if (!isPasswordCorrect) {
      const error = new BadRequestError('Invalid credentials');
      return next(error);
    }

    const token = generateToken({ id: user._id, role });

    res.status(200).json({
      status: 'success',
      message: 'Logged in successfully',
      data: { user, token },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  login,
};
