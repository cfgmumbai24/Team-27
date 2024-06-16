const Lecture = require('../models/Lecture');
const Mentor = require('../models/Mentor');
const User = require('../models/User');
const sendMessage = require('../utils/whatsapp')

const getLectures = async (req, res) => {
    try {
        const lectures = await Lecture.find().populate('mentor').populate('students');
        res.status(200).json(lectures);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createLecture = async (req, res) => {
    const { mentorId, name, description, schedule, link } = req.body;
  
    try {
      // Validate mentorId
      console
      const mentor = await Mentor.findById(mentorId);
      if (!mentor) {
        return res.status(400).json({ message: "Invalid mentorId" });
      }
  
      const allStudents = mentor.students || [];
  
      const newLecture = new Lecture({
        mentor: mentorId,
        students: allStudents,
        name,
        description,
        schedule,
        link,
      });
  
      const savedLecture = await newLecture.save();
  
      if (allStudents.length > 0) {
        // Update allLectures for each student
        await User.updateMany(
          { _id: { $in: allStudents } },
          { $push: { allLectures: savedLecture._id } }
        );

        sendMessage(`Dear SHIVAM, DARSHAN has scheduled a new class for you! Kindly join on time.JOIN HERE ${newLecture.link}`,
            '916352356169'
          );
  
        }
        res.status(201).json(savedLecture);
      }catch{
        res.status(500).json({ message: error.message });
      }
  
      
    };
  

const markAttendence = async (req,res) => {
    const {userid,lectureid} = req.body;
    const user = await User.findById(userid);
    const lecture = await Lecture.findById(lectureid);

    user.attendedLectures.push(lectureid);
    lecture.attended.push(userid);

    await user.save();
    await lecture.save();

    res.status(200).json({message: "attendence marked"});
}


module.exports = {
    getLectures,
    createLecture,
    markAttendence
};



// const Lecture = require('../models/Lecture');
// const Mentor = require('../models/Mentor');
// const User = require('../models/User');

// const getLectures = async (req, res) => {
//     try {
//         const lectures = await Lecture.find().populate('mentor');
//         res.status(200).json(lectures);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// const createLecture = async (req, res) => {
//     const { mentorId, name, description, schedule, link } = req.body;
  
//     try {
//       // Validate mentorId
//       console
//       const mentor = await Mentor.findById(mentorId);
//       if (!mentor) {
//         return res.status(400).json({ message: "Invalid mentorId" });
//       }
  
//       const allStudents = mentor.students || [];
  
//       const newLecture = new Lecture({
//         mentor: mentorId,
//         students: allStudents,
//         name,
//         description,
//         schedule,
//         link,
//       });
  
//       const savedLecture = await newLecture.save();
  
//       if (allStudents.length > 0) {
//         // Update allLectures for each student
//         await User.updateMany(
//           { _id: { $in: allStudents } },
//           { $push: { allLectures: savedLecture._id } }
//         );
  
//         // Send notification to each student
//         for (const studentId of allStudents) {
//           try {
//             const student = await User.findById(studentId);
//             if (student) {
//               await sendMessage(`Dear ${student.name}, ${mentor.name} has scheduled a new class for you! Kindly join on time.`,
//                 student.contact
//               );
//             } else {
//               console.log(`Student with ID ${studentId} not found.`);
//             }
//           } catch (error) {
//             console.error(
//               `Error sending message to student with ID ${studentId}:`,
//               error
//             );
//           }
//         }
//       }
  
//       res.status(201).json(savedLecture);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   };


// module.exports = {
//     getLectures,
//     createLecture
// };
