const Collection = require('../models/Collection');
const { NotFoundError } = require('../utils/errors');

const getAllCollections = async (req, res, next) => {
  try {
    const collections = await Collection.find();
    res.status(200).json({
      status: 'success',
      message: 'Collections retrieved successfully',
      data: collections,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getCollection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const collection = await Collection.findById(id);
    if (!collection) {
      const error = new NotFoundError('Collection not found');
      return next(error);
    }
    res.status(200).json({
      status: 'success',
      message: 'Collection retrieved successfully',
      data: collection,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createCollection = async (req, res, next) => {
  try {
    const { body } = req;
    const newCollection = Collection.create(body);
    const collection = await newCollection.save();
    res.status(201).json({
      status: 'success',
      message: 'Collection created successfully',
      data: collection,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updateCollection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const collection = await Collection.findById(id);
    if (!collection) {
      const error = new NotFoundError('Collection not found');
      return next(error);
    }

    // collection.set(body)

    collection.title = body.title;
    collection.type = body.type;
    collection.link = body.link;
    collection.level = body.level;
    collection.semester = body.semester;

    const updatedCollection = await collection.save();
    res.status(200).json({
      status: 'success',
      message: 'Collection updated successfully',
      data: updatedCollection,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deleteCollection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const collection = await Collection.findById(id);
    if (!collection) {
      const error = new NotFoundError('Collection not found');
      return next(error);
    }
    await Collection.deleteOne({ id });
    res.status(200).json({
      status: 'success',
      message: 'Collection deleted successfully',
      data: collection,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getAllCollections,
  getCollection,
  createCollection,
  updateCollection,
  deleteCollection,
};
