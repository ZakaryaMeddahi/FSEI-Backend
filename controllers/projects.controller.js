const Project = require('../models/Project');
const { NotFoundError } = require('../utils/errors');

const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.status(200).json({
      status: 'success',
      message: 'Projects retrieved successfully',
      data: projects,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      const error = new NotFoundError('Project not found');
      return next(error);
    }
    res.status(200).json({
      status: 'success',
      message: 'Project retrieved successfully',
      data: project,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createProject = async (req, res, next) => {
  try {
    const { body } = req;
    const newProject = Project.create(body);
    const project = await newProject.save();
    res.status(201).json({
      status: 'success',
      message: 'Project created successfully',
      data: project,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const project = await Project.findById(id);
    if (!project) {
      const error = new NotFoundError('project not found');
      return next(error);
    }

    // project.set(body)

    project.name = body.name;
    project.description = body.description;
    project.imgLink = body.imgLink;

    const updatedProject = await project.save();
    res.status(200).json({
      status: 'success',
      message: 'Project updated successfully',
      data: updatedProject,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      const error = new NotFoundError('Project not found');
      return next(error);
    }
    await Project.deleteOne({ id });
    res.status(200).json({
      status: 'success',
      message: 'Project deleted successfully',
      data: project,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
