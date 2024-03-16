const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema(
  {
    imgLink: {
      type: String,
      required: [true, 'Image link is required'],
    },
    redirectUrl: {
      type: String,
      default: null,
    },
    // author: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Admin',
    //   required: [true, 'Author is required'],
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Announcement', announcementSchema);
