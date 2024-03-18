const router = require('express').Router();
const {
  getField,
  getAllFields,
  createField,
  updateField,
  deleteField,
} = require('../controllers/fields.controller');
const {
  getModule,
  getAllModules,
  createModule,
  updateModule,
  deleteModule,
} = require('../controllers/modules.controller');
const {
  getPlanning,
  getAllPlannings,
  createPlanning,
  updatePlanning,
  deletePlanning,
} = require('../controllers/plannings.controller');
const adminMiddleware = require('../middlewares/admin.middleware');

router.route('/').get(getAllFields).post(adminMiddleware, createField);
router
  .route('/:id')
  .get(getField)
  .patch(adminMiddleware, updateField)
  .delete(adminMiddleware, deleteField);

router
  .route('/:fieldId/modules')
  .get(getAllModules)
  .post(adminMiddleware, createModule);
router
  .route('/:fieldId/modules/:id')
  .get(getModule)
  .patch(adminMiddleware, updateModule)
  .delete(adminMiddleware, deleteModule);

router
  .route('/:fieldId/plannings')
  .get(getAllPlannings)
  .post(adminMiddleware, createPlanning);
router
  .route('/:fieldId/plannings/:id')
  .get(getPlanning)
  .patch(adminMiddleware, updatePlanning)
  .delete(adminMiddleware, deletePlanning);

module.exports = router;
