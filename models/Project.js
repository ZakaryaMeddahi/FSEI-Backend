const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Project name is required'],
    },
    description: {
      type: String,
      default: 'No description',
    },
    imgLink: {
      type: String,
      default: null,
    },
    tags: {
      type: [String],
      default: [],
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: [true, 'Author ID is required'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
