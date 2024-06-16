const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor',
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    schedule: {
        type: Date,
        required: true
    },
    link:{
        type: String,
    }
});

const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
