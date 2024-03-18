const Planning = require('../models/Planning');
const { NotFoundError } = require('../utils/errors');

const getAllPlannings = async (req, res, next) => {
  try {
    const { fieldId } = req.params;
    const { level, semester } = req.query;
    let queryParams = {};
    if (level) {
      queryParams.level = level;
    }
    if (semester) {
      queryParams.semester = semester;
    }
    const plannings = await Planning.find({ ...queryParams, fieldId });
    res.status(200).json({
      status: 'success',
      message: 'Plannings retrieved successfully',
      data: plannings,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getPlanning = async (req, res, next) => {
  try {
    const { id } = req.params;
    const planning = await Planning.findById(id);
    if (!planning) {
      const error = new NotFoundError('Planning not found');
      return next(error);
    }
    res.status(200).json({
      status: 'success',
      message: 'Planning retrieved successfully',
      data: planning,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createPlanning = async (req, res, next) => {
  try {
    const {
      body,
      params: { fieldId },
    } = req;
    const newPlanning = Planning({ ...body, fieldId });
    const planning = await newPlanning.save();
    res.status(201).json({
      status: 'success',
      message: 'Planning created successfully',
      data: planning,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updatePlanning = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const planning = await Planning.findById(id);
    if (!planning) {
      const error = new NotFoundError('Planning not found');
      return next(error);
    }

    // planning.set(body)

    planning.title = body.title || planning.title;
    planning.imgLink = body.imgLink || planning.imgLink;
    planning.level = body.level || planning.level;
    planning.semester = body.semester || planning.semester;

    const updatedPlanning = await planning.save();
    res.status(200).json({
      status: 'success',
      message: 'Planning updated successfully',
      data: updatedPlanning,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deletePlanning = async (req, res, next) => {
  try {
    const { id } = req.params;
    const planning = await Planning.findById(id);
    if (!planning) {
      const error = new NotFoundError('Planning not found');
      return next(error);
    }
    await planning.deleteOne({ _id: id });
    res.status(200).json({
      status: 'success',
      message: 'Planning deleted successfully',
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getAllPlannings,
  getPlanning,
  createPlanning,
  updatePlanning,
  deletePlanning,
};
