const mongoose = require('mongoose');

const planningSchema = new mongoose.Schema(
  {
    title: {
      type: Date,
      default: null,
    },
    imgLink: {
      type: String,
      required: [true, 'Image Link is required'],
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
    //   type: mongoose.Types.ObjectId,
    //   ref: 'Author',
    //   required: [true, 'Author ID is required'],
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Planning', planningSchema);
