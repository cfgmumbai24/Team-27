
const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    },
    languages: {
        type: [String],
        required: true
    },
    password: {
        type: String,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    subject: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    }
});

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;
