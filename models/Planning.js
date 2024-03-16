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
    description: {
      type: String,
      default: 'No description',
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
