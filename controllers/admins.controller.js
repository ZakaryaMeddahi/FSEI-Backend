const generatePassword = require('../helpers/generatePassword');
const sendEmail = require('../helpers/sendEmail');
const Admin = require('../models/Admin');
const { BadRequestError } = require('../utils/errors');

const createAdmin = async (req, res, next) => {
  try {
    const { email } = req.body;

    const adminUser = await Admin.findOne({ email });

    if (adminUser) throw new BadRequestError('This email already exists');

    const password = generatePassword();

    const newAdmin = Admin({ email, password });

    if (!email) {
      error = new BadRequestError('Please provide an email');
      return next(error);
    }

    const admin = await newAdmin.save();

    sendEmail({ email, password });

    res.status(201).json({
      status: 'success',
      message: 'Admin created successfully',
      data: admin,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  createAdmin,
};
