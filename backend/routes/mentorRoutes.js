const express = require('express');
const router = express.Router();
const {
    getMentors,
    getMentorById,
    createMentor,
    updateMentor,
    deleteMentor,
    login
} = require('../controllers/MentorController'); // Adjust the path as necessary

// Get all mentors
router.get('/', getMentors);

// Get a mentor by ID
router.get('/:id', getMentorById);

// Create a new mentor
router.post('/', createMentor);

// Update a mentor
router.put('/:id', updateMentor);

// Delete a mentor
router.delete('/:id', deleteMentor);
router.post('/login',login);

module.exports = router;
