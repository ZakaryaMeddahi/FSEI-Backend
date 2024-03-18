const generatePassword = require('../helpers/generatePassword');
const sendEmail = require('../helpers/sendEmail');
const Student = require('../models/Student');
const { NotFoundError } = require('../utils/errors');

const getAllStudents = async (req, res, next) => {
  try {
    const { name, email, registrationN } = req.query;
    const [firstName, lastName] = name?.split(' ') || [];
    let queryParams = {};
    console.log(lastName);
    if (firstName) {
      queryParams['$or'] = [
        { firstName: { $regex: firstName, $options: 'i' } },
        { lastName: { $regex: firstName, $options: 'i' } },
      ];
    }
    if (lastName) {
      queryParams['$or'] = [
        { lastName: { $regex: lastName, $options: 'i' } },
        { firstName: { $regex: lastName, $options: 'i' } },
      ];
    }
    if (email) {
      queryParams['$or'] = [
        ...queryParams['$or'],
        { email: { $regex: email, $options: 'i' } },
      ];
    }
    if (registrationN) {
      queryParams['$or'] = [
        ...queryParams['$or'],
        { registrationNumber: { $regex: registrationN, $options: 'i' } },
      ];
    }
    const students = await Student.find(queryParams);
    res.status(200).json({
      status: 'success',
      message: 'Students retrieved successfully',
      data: students,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      const error = new NotFoundError('Student not found');
      return next(error);
    }
    res.status(200).json({
      status: 'success',
      message: 'Student retrieved successfully',
      data: student,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createStudent = async (req, res, next) => {
  try {
    const { body } = req;
    const password = generatePassword();
    const newStudent = Student({
      ...body,
      password,
    });
    const student = await newStudent.save();
    // Send an email to student contain generated password
    sendEmail({ email: student.email, password });
    res.status(201).json({
      status: 'success',
      message: 'Student created successfully',
      data: student,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const student = await Student.findById(id);
    if (!student) {
      const error = new NotFoundError('Student not found');
      return next(error);
    }

    // Student.set(body)

    student.firstName = body.firstName || student.firstName;
    student.lastName = body.imgLink || student.lastName;
    student.registrationNumber =
      body.registrationNumber || student.registrationNumber;
    student.email = body.email || student.email;
    student.password = body.password || student.password;

    const updatedStudent = await student.save();
    res.status(200).json({
      status: 'success',
      message: 'Student updated successfully',
      data: updatedStudent,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      const error = new NotFoundError('Student not found');
      return next(error);
    }
    console.log(id);
    await Student.deleteOne({ _id: id });
    res.status(200).json({
      status: 'success',
      message: 'Student deleted successfully',
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
