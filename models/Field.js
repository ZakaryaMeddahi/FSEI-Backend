const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Field name is required'],
  },
});

module.exports = mongoose.model('Field', fieldSchema);
