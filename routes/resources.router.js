const router = require('express').Router();
const {
  getResource,
  getAllResources,
  createResource,
  updateResource,
  deleteResource,
} = require('../controllers/resources.controller');

router.route('/').get(getAllResources).post(createResource);
router.route('/:id').get(getResource).patch(updateResource).delete(deleteResource);

module.exports = router;