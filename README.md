# EduPlatform: Empowering Students through Mentorship

## Project Overview
EduPlatform is a comprehensive web application built using the MERN stack (MongoDB, Express, React, Node.js) aimed at enhancing educational experiences by connecting students with mentors. The platform supports two types of users: students and mentors (or admins), each with tailored functionalities to facilitate a seamless educational process.

## Table of Contents
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Authentication and Authorization](#authentication-and-authorization)
6. [Student Registration Form](#student-registration-form)
7. [Mentor List Page](#mentor-list-page)
8. [Student Dashboard](#student-dashboard)
9. [Mentor/Admin Dashboard](#mentor-admin-dashboard)
10. [WhatsApp Notification](#whatsapp-notification)
11. [Contributing](#contributing)
12. [License](#license)

## Features
- User authentication and role-based access control for students and mentors/admins.
- Detailed student registration form to collect personal and academic details.
- Mentor list page where students can view profiles and book Zoom classes.
- Student dashboard displaying learning status, progress, and attendance.
- Mentor/admin dashboard showing students' statuses, attendance, marks, and notification functionality.

## Project Structure
eduplatform/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── app.js
│ └── server.js
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
├── .gitignore
├── README.md
└── package.json

bash
Copy code

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/eduplatform.git
   cd eduplatform
Install dependencies for both backend and frontend:

bash
Copy code
cd backend
npm install
cd ../frontend
npm install
Create a .env file in the backend directory and add your environment variables:

makefile
Copy code
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
Start the development servers:

bash
Copy code
cd backend
npm run dev
cd ../frontend
npm start
Usage
Access the application via http://localhost:3000.
Sign up or log in as a student or mentor/admin.
Authentication and Authorization

Implement JWT authentication for secure login.

Role-based access control to differentiate between student and mentor/admin functionalities.

Student Registration Form

After the first login, students fill out a registration form with personal and academic details.

The form data is saved in the MongoDB database.

Mentor List Page

Students are redirected to a mentor list page post-registration.

Students can view mentor profiles, book Zoom classes, and confirm bookings.

Student Dashboard

Displays the student’s current learning status, progress, and attendance.

Allows students to view their booked classes and other educational details.

Mentor/Admin Dashboard

Shows all students’ statuses, attendance, and marks.

Mentors can send WhatsApp notifications to students for updates and reminders.

WhatsApp Notification

Integrate WhatsApp API to enable mentors to notify students about important updates, class schedules, and more.

Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.


License
This project is licensed under the MIT License. See the LICENSE file for details.

Flow-chart of our WebApp


![Screenshot 2024-06-16 060706](https://github.com/cfgmumbai24/Team-27/assets/128352039/ad5e4b25-b1a6-474e-9811-d8c34e525deb)
