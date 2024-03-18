const router = require('express').Router();
const {
  getModule,
  getAllModules,
  createModule,
  updateModule,
  deleteModule,
} = require('../controllers/modules.controller');
const {
  getResource,
  getAllResources,
  createResource,
  updateResource,
  deleteResource,
} = require('../controllers/resources.controller');

router.route('/').get(getAllModules).post(createModule);
router.route('/:id').get(getModule).patch(updateModule).delete(deleteModule);

router.route('/:moduleId/resources').get(getAllResources).post(createResource);
router
  .route('/:moduleId/resources/:id')
  .get(getResource)
  .patch(updateResource)
  .delete(deleteResource);

module.exports = router;
