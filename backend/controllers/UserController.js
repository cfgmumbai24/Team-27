const User = require('../models/User');

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find().populate('allLectures');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a user by ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).populate('allLectures');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//LOGIN
const login = async (req, res) => {
    const { email,password } = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({ message: 'Incorrect User or Password' });
        }
        if(password != user.password){
            return res.status(401).json({message: 'Incorrect User or Password'});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//SIGNUP
const signup = async(req, res) => {
    const { email,name,password,contact } = req.body;
    console.log(req.body);
    try {
        let user = await User.findOne({email});
        if (user) {
            return res.status(403).json({ message: ' User already Exists'});
        }
        
        const newUser = new User({
            firstname,
            lastname,
            email,
            phoneNumber,
            gender,
            age,
            dob,
            address,
            state,
            district,
            pincode,
            socialCategory,
            mothersProfession,
            fathersProfession,
            fathersEducation,
            mothersEducation,
            boardIn12th,
            collegeLocationIn10th,
            mediumOfEducationIn12th,
            mediumOfEducationInUG,
            preparingForExams,
            desiredInstitute,
            interestOfStudy,
            photo,
            declaration
        });
    
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
};



// Create a new user
const registerUser = async (req, res) => {
    const {
         email, contact, district, address, state,
        tenthMarks, twelfthMarks, languages, password
    } = req.body;

    try {
        let user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({ message: 'Incorrect User or Password' });
        }
        if(password !== user.password){
            return res.status(401).json({message: 'Incorrect User or Password'});
        }
        user.contact = contact;
        user.district = district;
        user.address = address;
        user.state = state;
        user.tenthMarks = tenthMarks;
        user.twelfthMarks = twelfthMarks;
        user.languages = languages;

        
        await user.save();

        res.status(200).json({ message: 'User details updated successfully', user });
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Update a user
const updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true }).populate('allLectures');
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const joinMentor = async (req,res) => {
    const {studentID, mentorID} = req.body;
    try {
        
        const mentor = await Mentor.findById(mentorId);
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        const student = await User.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        if(student.mentor){
            return res.status(403).json({message: 'Mentor is already assigned'});
        }
        student.mentor = mentorId;

        // Add the student to the mentor's students list if not already present
        if (!mentor.students.includes(studentId)) {
            mentor.students.push(studentId);
        }

        // Save the updates
        await student.save();
        await mentor.save();

        res.status(200).json({ message: 'Student joined the mentor successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getUsers,
    joinMentor,
    getUserById,
    login,
    registerUser,
    signup,
    updateUser,
    deleteUser
};
