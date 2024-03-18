const Field = require('../models/Field');
const { NotFoundError } = require('../utils/errors');

const getAllFields = async (req, res, next) => {
  try {
    const { name } = req.query;
    let queryParams = {};
    if (name) {
      queryParams.name = new RegExp(name, 'i');
    }
    const fields = await Field.find(queryParams);
    res.status(200).json({
      status: 'success',
      message: 'Fields retrieved successfully',
      data: fields,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getField = async (req, res, next) => {
  try {
    const { id } = req.params;
    const field = await Field.findById(id);
    if (!field) {
      const error = new NotFoundError('Field not found');
      return next(error);
    }
    res.status(200).json({
      status: 'success',
      message: 'Field retrieved successfully',
      data: field,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createField = async (req, res, next) => {
  try {
    const { body } = req;
    const newField = Field(body);
    const field = await newField.save();
    res.status(201).json({
      status: 'success',
      message: 'Field created successfully',
      data: field,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updateField = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const field = await Field.findById(id);
    if (!field) {
      const error = new NotFoundError('field not found');
      return next(error);
    }

    // field.set(body)

    field.name = body.name || field.name;

    const updatedField = await field.save();
    res.status(200).json({
      status: 'success',
      message: 'Field updated successfully',
      data: updatedField,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deleteField = async (req, res, next) => {
  try {
    const { id } = req.params;
    const field = await Field.findById(id);
    if (!field) {
      const error = new NotFoundError('Field not found');
      return next(error);
    }
    await Field.deleteOne({ _id: id });
    res.status(200).json({
      status: 'success',
      message: 'Field deleted successfully',
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getAllFields,
  getField,
  createField,
  updateField,
  deleteField,
};
