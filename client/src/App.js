import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom';

// import Header from './components/';
import Ekart from './components/Ekart';
// import EkartProfile from './components/EkartProfile';
import Login from './components/Login';
import Home from './components/Home'
import Signup from './components/Signup';
import RegistrationForm from './components/Registration/RegistrationForm';
import MentorRegForm from './components/Registration/MentorRegForm';
import StudentDashboard from './components/StudentDashboard';
import MentorDashboard from './components/MentorDashboard';
import Scholarship from './components/Scholarship';
import Webinar from './components/Webinar';
import Resources from './components/Resources';
import Donate from './components/Donation';
// import MentorRegistrationForm from './components/Registration/MentorRegForm';
import MentorList from './components/MentorList';
// import WhatsAppNotification from './WhatsAppNotification';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Switch> */}
      {/* <BrowserRouter> */}
      <Routes>
      {/* <Routes> */}
        <Route path="/" element ={<Home/>} />
        <Route path="/login"  element = {<Login />} />
        <Route path="/signup" element = {<Signup />} />
        {/* currently working on registration form. */}
        <Route path="/register-form" element = {<RegistrationForm />} />
        <Route path="/mentor-register-form" element = {<MentorRegForm />} />
        <Route path="/resources" element = {<Resources />} />
        <Route path="/ekart" element = {<Ekart />} />
        <Route path="/donation" element = {<Donate />} />

        <Route path="/ekart/:id" element = {<Ekart />} />
        <Route path="/student-dashboard" element = {<StudentDashboard />} />
        <Route path="/mentor-dashboard" element = {<MentorDashboard />} />
        <Route path="/scholarship" element = {<Scholarship />} />
        <Route path="/webinar" element = {<Webinar />} />
        <Route path="/mentor-selection" element = {<MentorList/>} />
        </Routes>
        {/* </BrowserRouter> */}
      {/* </Routes> */}
        {/* <Route path="/whatsapp-notification" component={WhatsAppNotification} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;