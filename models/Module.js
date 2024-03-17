const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Module name is required'],
  },
  level: {
    type: String,
    enum: ['L1', 'L2', 'L3', 'M1', 'M2'],
    required: [true, 'Level is required'],
  },
  semester: {
    type: String,
    enum: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
    required: [true, 'Semester is required'],
  },
  fieldId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Field',
    required: [true, 'Field ID is required'],
  },
});

module.exports = mongoose.model('Module', moduleSchema);
