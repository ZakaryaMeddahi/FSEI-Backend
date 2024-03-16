const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project name is required'],
    },
    content: {
      type: String,
      default: 'No content',
    },
    imgLink: {
      type: String,
      default: null,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: [true, 'Author ID is required'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
