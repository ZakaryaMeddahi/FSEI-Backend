const Blog = require('../models/Blog');
const { NotFoundError } = require('../utils/errors');

const getAllBlogs = async (req, res, next) => {
  try {
    const { title } = req.query;
    let queryParams = {};
    if (title) {
      queryParams.title = new RegExp(title, 'i');
    }
    const blogs = await Blog.find();
    res.status(200).json({
      status: 'success',
      message: 'Blogs retrieved successfully',
      data: blogs,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      const error = new NotFoundError('Blog not found');
      return next(error);
    }
    res.status(200).json({
      status: 'success',
      message: 'Blog retrieved successfully',
      data: blog,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createBlog = async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.user;
    const newBlog = Blog({ ...body, authorId: id });
    const blog = await newBlog.save();
    res.status(201).json({
      status: 'success',
      message: 'Blog created successfully',
      data: blog,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const blog = await Blog.findById(id);
    if (!blog) {
      const error = new NotFoundError('Blog not found');
      return next(error);
    }

    // blog.set(body)

    blog.title = body.title || blog.title;
    blog.content = body.content || blog.content;
    blog.imgLink = body.imgLink || blog.imgLink;

    const updatedBlog = await blog.save();
    res.status(200).json({
      status: 'success',
      message: 'Blog updated successfully',
      data: updatedBlog,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      const error = new NotFoundError('Blog not found');
      return next(error);
    }
    await Blog.deleteOne({ _id: id });
    res.status(200).json({
      status: 'success',
      message: 'Blog deleted successfully',
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
