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
const adminMiddleware = require('../middlewares/admin.middleware');

router.route('/').get(getAllModules).post(adminMiddleware, createModule);
router
  .route('/:id')
  .get(getModule)
  .patch(adminMiddleware, updateModule)
  .delete(adminMiddleware, deleteModule);

router
  .route('/:moduleId/resources')
  .get(getAllResources)
  .post(adminMiddleware, createResource);
router
  .route('/:moduleId/resources/:id')
  .get(getResource)
  .patch(adminMiddleware, updateResource)
  .delete(adminMiddleware, deleteResource);

module.exports = router;
