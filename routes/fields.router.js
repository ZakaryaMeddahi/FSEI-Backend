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

router.route('/').get(getAllFields).post(createField);
router.route('/:id').get(getField).patch(updateField).delete(deleteField);

router.route('/:fieldId/modules').get(getAllModules).post(createModule);
router
  .route('/:fieldId/modules/:id')
  .get(getModule)
  .patch(updateModule)
  .delete(deleteModule);

router.route('/:fieldId/plannings').get(getAllPlannings).post(createPlanning);
router
  .route('/:fieldId/plannings/:id')
  .get(getPlanning)
  .patch(updatePlanning)
  .delete(deletePlanning);

module.exports = router;
