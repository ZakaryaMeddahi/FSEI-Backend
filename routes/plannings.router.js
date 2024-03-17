const router = require('express').Router();
const {
  getPlanning,
  getAllPlannings,
  createPlanning,
  updatePlanning,
  deletePlanning,
} = require('../controllers/plannings.controller');

router.route('/').get(getAllPlannings).post(createPlanning);
router
  .route('/:id')
  .get(getPlanning)
  .patch(updatePlanning)
  .delete(deletePlanning);

module.exports = router;