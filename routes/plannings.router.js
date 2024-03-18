const router = require('express').Router();
const {
  getPlanning,
  getAllPlannings,
  createPlanning,
  updatePlanning,
  deletePlanning,
} = require('../controllers/plannings.controller');
const adminMiddleware = require('../middlewares/admin.middleware');

router.route('/').get(getAllPlannings).post(adminMiddleware, createPlanning);
router
  .route('/:id')
  .get(getPlanning)
  .patch(adminMiddleware, updatePlanning)
  .delete(adminMiddleware, deletePlanning);

module.exports = router;
