const router = require('express').Router();
const {
  getAllAnnouncements,
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} = require('../controllers/announcements.controller');
const adminMiddleware = require('../middlewares/admin.middleware');

router
  .route('/')
  .get(getAllAnnouncements)
  .post(adminMiddleware, createAnnouncement);
router
  .route('/:id')
  .get(getAnnouncement)
  .patch(adminMiddleware, updateAnnouncement)
  .delete(adminMiddleware, deleteAnnouncement);

module.exports = router;
