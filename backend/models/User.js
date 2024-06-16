const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true, match: /^[A-Za-z]{1,32}$/ },
  lastname: { type: String, required: true, match: /^[A-Za-z]{1,32}$/ },
  email: { type: String, required: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phoneNumber: { type: String, required: true, match: /^[7-9][0-9]{9}$/ },
  gender: { type: String, required: true, enum: ["Male", "Female"] },
  age: { type: String, required: true, match: /^[0-9]{2}$/ },
  dob: { type: Date, required: true },
  address: { type: String, required: true, maxlength: 100 },
  state: { type: String, required: true },
  district: {
    type: String,
    required: true,
    match: /^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/,
  },
  pincode: { type: String, match: /^[0-9]{6}$/ },
  socialCategory: { type: String },
  mothersProfession: {
    type: String,
    required: true,
    match: /^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/,
  },
  fathersProfession: {
    type: String,
    required: true,
    match: /^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/,
  },
  familyIncome: { type: String, required: true },
  hasLaptopOrComputer: { type: String, required: true, enum: ["Yes", "No"] },
  educationQualification: {
    type: String,
    required: true,
    match: /^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/,
  },
  currentEducationLevel: { type: String, required: true },
  mothersEducation: {
    type: String,
    required: true,
    match: /^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/,
  },
  fathersEducation: {
    type: String,
    required: true,
    match: /^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/,
  },
  boardIn12th: { type: String, required: true },
  collegeLocationIn10th: { type: String, required: true },
  mediumOfEducationIn12th: { type: String, required: true },
  mediumOfEducationInUG: { type: String, required: true },
  preparingForExams: {
    type: String,
    required: true,
    match: /^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/,
  },
  desiredInstitute: {
    type: String,
    required: true,
    match: /^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/,
  },
  interestOfStudy: {
    type: String,
    required: true,
    match: /^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/,
  },
  photo: { type: String, required: true },
  declaration: { type: Boolean, required: true, enum: [true] },
  attendedLectures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lecture",
    },
  ],
  allLectures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lecture",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
