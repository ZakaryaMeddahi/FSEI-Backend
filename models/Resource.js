const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Resource title is required'],
        },
        type: {
            type: String,
            enum: ['cours', 'exam'],
            required: [true, 'Resource type is required'],
        },
        link: {
            type: String,
            default: null,
        },
        // level: {
        //   type: String,
        //   enum: ['L1', 'L2', 'L3', 'M1', 'M2'],
        //   required: [true, 'Resource level is required'],
        // },
        moduleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Module',
            required: [true, 'Module ID is required'],
        },
        // authorId: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: 'Admin',
        //   required: [true, 'Author ID is required'],
        // },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Resource', resourceSchema);
