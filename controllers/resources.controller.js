const Resource = require('../models/Resource');
const { NotFoundError } = require('../utils/errors');

const getAllResources = async (req, res, next) => {
  try {
    const { moduleId } = req.params;
    console.log(moduleId);
    const resources = await Resource.find({ moduleId });
    res.status(200).json({
      status: 'success',
      message: 'Resources retrieved successfully',
      data: resources,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getResource = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resource = await Resource.findById(id);
    if (!resource) {
      const error = new NotFoundError('Resource not found');
      return next(error);
    }
    res.status(200).json({
      status: 'success',
      message: 'Resource retrieved successfully',
      data: resource,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createResource = async (req, res, next) => {
  try {
    const {
      body,
      params: { moduleId },
    } = req;
    const newResource = Resource({
      ...body,
      moduleId,
    });
    const resource = await newResource.save();
    res.status(201).json({
      status: 'success',
      message: 'Resource created successfully',
      data: resource,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updateResource = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const resource = await Resource.findById(id);
    if (!resource) {
      const error = new NotFoundError('resource not found');
      return next(error);
    }

    // resource.set(body)

    resource.title = body.title || resource.title;
    resource.type = body.type || resource.type;
    resource.link = body.link || resource.link;
    resource.level = body.level || resource.level;

    const updatedResource = await resource.save();
    res.status(200).json({
      status: 'success',
      message: 'Resource updated successfully',
      data: updatedResource,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deleteResource = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resource = await Resource.findById(id);
    if (!resource) {
      const error = new NotFoundError('Resource not found');
      return next(error);
    }
    await Resource.deleteOne({ _id: id });
    res.status(200).json({
      status: 'success',
      message: 'Resource deleted successfully',
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getAllResources,
  getResource,
  createResource,
  updateResource,
  deleteResource,
};
