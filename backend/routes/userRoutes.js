const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUserById,
    signup,
    login,
    registerUser,
    updateUser,
    deleteUser,
    joinMentor
} = require('../controllers/UserController'); // Adjust the path as necessary

// Get all users
router.get('/', getUsers);

// Get a user by ID
router.get('/:id', getUserById);

// Signup a new user
router.post('/signup', signup);

// Login a user
router.post('/login', login);

// Register a new user
router.post('/register', registerUser);

// Update a user
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);

// Join mentor
router.post('/join-mentor', joinMentor);

module.exports = router;
