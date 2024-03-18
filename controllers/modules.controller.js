const Module = require('../models/Module');
const { NotFoundError } = require('../utils/errors');

const getAllModules = async (req, res, next) => {
  try {
    const { fieldId } = req.params;
    const modules = await Module.find({ fieldId });
    res.status(200).json({
      status: 'success',
      message: 'Modules retrieved successfully',
      data: modules,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getModule = async (req, res, next) => {
  try {
    const { id } = req.params;
    const module = await Module.findById(id);
    if (!module) {
      const error = new NotFoundError('Module not found');
      return next(error);
    }
    res.status(200).json({
      status: 'success',
      message: 'Module retrieved successfully',
      data: module,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createModule = async (req, res, next) => {
  try {
    console.log(req.params);
    const { fieldId } = req.params;
    const { body } = req;
    const newModule = Module({
      ...body,
      fieldId,
    });
    console.log('field id: ' + fieldId);
    const module = await newModule.save();
    res.status(201).json({
      status: 'success',
      message: 'Module created successfully',
      data: module,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updateModule = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const module = await Module.findById(id);
    if (!module) {
      const error = new NotFoundError('Module not found');
      return next(error);
    }

    // module.set(body)

    module.name = body.name || module.name;
    module.level = body.level || module.level;
    module.semester = body.semester || module.semester;

    const updatedModule = await module.save();
    res.status(200).json({
      status: 'success',
      message: 'Module updated successfully',
      data: updatedModule,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deleteModule = async (req, res, next) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const module = await Module.findById(id);
    if (!module) {
      const error = new NotFoundError('Module not found');
      return next(error);
    }
    await Module.deleteOne({ _id: id });
    res.status(200).json({
      status: 'success',
      message: 'Module deleted successfully',
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getAllModules,
  getModule,
  createModule,
  updateModule,
  deleteModule,
};
