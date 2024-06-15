const Lecture = require('../models/lectureModel');
const Mentor = require('../models/mentorModel');
const User = require('../models/userModel');

const getLectures = async (req, res) => {
    try {
        const lectures = await Lecture.find().populate('mentor').populate('students');
        res.status(200).json(lectures);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createLecture = async (req, res) => {
    const {
        mentorId, name, description, schedule
    } = req.body;

    // Validate mentorId
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
        return res.status(400).json({ message: 'Invalid mentorId' });
    }

    
    const allStudents = studentIds.length === 0 ? mentor.students : [];

    const newLecture = new Lecture({
        mentor: mentorId,
        students: allStudents,
        name,
        description,
        schedule
    });

    try {
        const savedLecture = await newLecture.save();

        // Update allLectures for each student
        await User.updateMany({ _id: { $in: allStudents } }, { $push: { allLectures: savedLecture._id } });

        res.status(201).json(savedLecture);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = {
    getLectures,
    createLecture
};
