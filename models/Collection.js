const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Collection title is required'],
    },
    type: {
      type: Enumerator(['course', 'exam']),
      required: [true, 'Collection type is required'],
    },
    link: {
      type: String,
      default: null,
    },
    level: {
      type: String,
      enum: ['L1', 'L2', 'L3', 'M1', 'M2'],
      required: [true, 'Collection level is required'],
    },
    semester: {
      type: String,
      enum: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
      required: [true, 'Collection semester is required'],
    },
    // authorId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Admin',
    //   required: [true, 'Author ID is required'],
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Collection', collectionSchema);
