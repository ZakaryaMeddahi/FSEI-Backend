const Planning = require('../models/Planning');
const { NotFoundError } = require('../utils/errors');

const getAllPlannings = async (req, res, next) => {
  try {
    const plannings = await Planning.find();
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
    const { body } = req;
    const newPlanning = Planning.create(body);
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

    planning.title = body.title;
    planning.imgLink = body.imgLink;
    planning.level = body.level;
    planning.semester = body.semester;

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
    await planning.deleteOne({ id });
    res.status(200).json({
      status: 'success',
      message: 'Planning deleted successfully',
      data: planning,
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
