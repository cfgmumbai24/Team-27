const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/mongo')

dotenv.config();

const app = express();
app.use(cors());



await connectDB();
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
