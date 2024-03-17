const router = require('express').Router();
const {
  getAllAnnouncements,
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} = require('../controllers/announcements.controller');

router.route('/').get(getAllAnnouncements).post(createAnnouncement);
router
  .route('/:id')
  .get(getAnnouncement)
  .patch(updateAnnouncement)
  .delete(deleteAnnouncement);

module.exports = router;