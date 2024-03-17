const Announcement = require('../models/Announcement');
const { NotFoundError } = require('../utils/errors');

const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json({
      status: 'success',
      message: 'Announcements retrieved successfully',
      data: announcements,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getAnnouncement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const announcement = await Announcement.findById(id);
    if (!announcement) {
      const error = new NotFoundError('Announcement not found');
      return next(error);
    }
    res.status(200).json({
      status: 'success',
      message: 'Announcement retrieved successfully',
      data: announcement,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createAnnouncement = async (req, res, next) => {
  try {
    const { body } = req;
    const newAnnouncement = Announcement.create(body);
    const announcement = await newAnnouncement.save();
    res.status(201).json({
      status: 'success',
      message: 'Announcement created successfully',
      data: announcement,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updateAnnouncement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const announcement = await Announcement.findById(id);
    if (!announcement) {
      const error = new NotFoundError('Announcement not found');
      return next(error);
    }

    // planning.set(body)

    announcement.imgLink = body.imgLink;
    announcement.redirectUrl = body.redirectUrl;

    const updatedAnnouncement = await announcement.save();
    res.status(200).json({
      status: 'success',
      message: 'Announcement updated successfully',
      data: updatedAnnouncement,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deleteAnnouncement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const announcement = await Announcement.findById(id);
    if (!announcement) {
      const error = new NotFoundError('Announcement not found');
      return next(error);
    }
    await announcement.deleteOne({ id });
    res.status(200).json({
      status: 'success',
      message: 'Announcement deleted successfully',
      data: announcement,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getAllAnnouncements,
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};
