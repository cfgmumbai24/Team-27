const Mentor = require('../models/mentorModel');
const User = require('../models/userModel');
const Lecture = require('../models/lectureModel');

// Get all mentors
const getMentors = async (req, res) => {
    try {
        const mentors = await Mentor.find().populate('students').populate('lectures');
        res.status(200).json(mentors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a mentor by ID
const getMentorById = async (req, res) => {
    const { id } = req.params;
    try {
        const mentor = await Mentor.findById(id).populate('students').populate('lectures');
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }
        res.status(200).json(mentor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new mentor
const createMentor = async (req, res) => {
    const {
        firstname,
        lastname,
        email,
        phoneNumber,
        gender,
        dob,
        address,
        state,
        district,
        pincode,
        highestQualification,
        currentOccupation,
        yearsOfExperience,
        skills,
        linkedinProfile,
        photo,
        declaration
    } = req.body;

    const newMentor = new Mentor({
        firstname,
        lastname,
        email,
        phoneNumber,
        gender,
        dob,
        address,
        state,
        district,
        pincode,
        highestQualification,
        currentOccupation,
        yearsOfExperience,
        skills,
        linkedinProfile,
        photo,
        declaration
    });

    try {
        const savedMentor = await newMentor.save();
        res.status(201).json(savedMentor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a mentor
const updateMentor = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedMentor = await Mentor.findByIdAndUpdate(id, updates, { new: true })
            .populate('students')
            .populate('lectures');
        if (!updatedMentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }
        res.status(200).json(updatedMentor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a mentor
const deleteMentor = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedMentor = await Mentor.findByIdAndDelete(id);
        if (!deletedMentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }
        res.status(200).json({ message: 'Mentor deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getMentors,
    getMentorById,
    createMentor,
    updateMentor,
    deleteMentor
};
