
const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        match: /^[A-Za-z]{1,32}$/
    },
    lastname: {
        type: String,
        required: true,
        match: /^[A-Za-z]{1,32}$/
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^[7-9][0-9]{9}$/
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    dob: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true,
        maxlength: 100
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        // required: true,
        match: /^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/
    },
    pincode: {
        type: String,
        required: true,
        match: /^[0-9]{6}$/
    },
    highestQualification: {
        type: String,
        required: true
    },
    currentOccupation: {
        type: String,
        // required: true,
        match: /^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/
    },
    yearsOfExperience: {
        type: Number,
        required: true,
        min: 0
    },
    skills: {
        type: String,
        required: true
    },
    linkedinProfile: {
        type: String,
        required: true,
        match: /^(https?:\/\/)?([\w\d\-_]+\.+\S+)([\w\d\-_./?=#]+)?$/
    },
    photo: {
        type: String, // or Buffer if you are storing the file content directly
        required: true
    },
    declaration: {
        type: Boolean,
        required: true
    }
});

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;
