const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	contact: {
		type: String,
		required: true,
	},
	district: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	tenthMarks: {
		type: Number,
		required: true,
	},
	twelfthMarks: {
		type: Number,
		required: true,
	},
	languages: {
		type: [String],
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	mentor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Mentor",
	},
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
