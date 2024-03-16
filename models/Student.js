const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'firstName is required'],
    },
    lastName: {
      type: Number,
      required: [true, 'lastName is required'],
    },
    registrationNumber: {
      type: String,
      required: [true, 'Registration number is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', studentSchema);
