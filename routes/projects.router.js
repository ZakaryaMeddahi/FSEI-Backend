const router = require('express').Router();
const {
  getProject,
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projects.controller');

router.route('/').get(getAllProjects).post(createProject);
router.route('/:id').get(getProject).patch(updateProject).delete(deleteProject);

module.exports = router;