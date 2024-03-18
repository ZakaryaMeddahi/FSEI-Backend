const router = require('express').Router();
const {
  getResource,
  getAllResources,
  createResource,
  updateResource,
  deleteResource,
} = require('../controllers/resources.controller');
const adminMiddleware = require('../middlewares/admin.middleware');

router.route('/').get(getAllResources).post(adminMiddleware, createResource);
router
  .route('/:id')
  .get(getResource)
  .patch(adminMiddleware, updateResource)
  .delete(adminMiddleware, deleteResource);

module.exports = router;
