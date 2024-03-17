const router = require('express').Router();
const {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogs.controller');

router.route('/').get(getAllBlogs).post(createBlog);
router.route('/:id').get(getBlog).patch(updateBlog).delete(deleteBlog);

module.exports = router;