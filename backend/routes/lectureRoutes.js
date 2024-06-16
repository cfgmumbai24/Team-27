const express = require('express');
const router = express.Router();
const {
    getLectures,
    createLecture,
    markAttendence
} = require('../controllers/lectureController'); // Adjust the path as necessary

// Get all lectures
router.get('/', getLectures);

// Create a new lecture
router.post('/', createLecture);

// Mark attendance
router.post('/attendance', markAttendence);

module.exports = router;
