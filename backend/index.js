const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require("dotenv");
// const connectDB = require("./db/mongo");
const sendMessage = require("./utils/whatsapp");

// const { signup } = require("./controllers/UserController");
const userRoutes = require('./routes/userRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const lectureRoutes = require('./routes/lectureRoutes');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/mentors', mentorRoutes);
app.use('/lectures', lectureRoutes);


// app.use(router);
// sendMessage("hello nice to meet you", "917018234423");

//connectDB();

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}`);
// 	sendMessage("hello nice to meet you", "7018234423");
// });

// using mongodb atlas, which is web browser setup
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }) 
  .then(() => {
	app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
	console.log("")

  })
  .catch((err) => console.log(`The error is: ${err}`));





// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./db/mongo')

// dotenv.config();

// const app = express();
// app.use(cors());



// await connectDB();
// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
