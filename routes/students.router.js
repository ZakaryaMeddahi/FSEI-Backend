const router = require('express').Router();
const {
  getStudent,
  getAllStudents,
  createStudent,
  updateStudent,
} = require('../controllers/students.controller');

router.route('/').get(getAllStudents).post(createStudent);
router.route('/:id').get(getStudent).patch(updateStudent);

module.exports = router;