const Student = require('../models/Student');
const { NotFoundError } = require('../utils/errors');

const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
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
    const newStudent = Student.create(body);
    const student = await newStudent.save();
    // Send an email to student contain generated password
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

    student.firstName = body.firstName;
    student.lastName = body.imgLink;
    student.registrationNumber = body.registrationNumber;
    student.email = body.email;
    student.password = body.password;

    const updatedStudent = await Student.save();
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
    await Student.deleteOne({ id });
    res.status(200).json({
      status: 'success',
      message: 'Student deleted successfully',
      data: student,
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
