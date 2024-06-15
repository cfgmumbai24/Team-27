import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom';

// import Header from './components/';
import Ekart from './components/Ekart';
// import EkartProfile from './components/EkartProfile';
import Login from './components/Login';
import Signup from './components/Signup';
import StudentDashboard from './components/StudentDashboard';
import MentorDashboard from './components/MentorDashboard';
import Scholarship from './components/Scholarship';
import Webinar from './components/Webinar';
// import WhatsAppNotification from './WhatsAppNotification';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Switch> */}
      {/* <BrowserRouter> */}
      <Routes>
      {/* <Routes> */}
        <Route path="/" element ={<Login />} />
        <Route path="/login"  element = {<Login />} />
        <Route path="/signup" element = {<Signup />} />
        <Route path="/ekart" element = {<Ekart />} />
        <Route path="/ekart/:id" element = {<Ekart />} />
        <Route path="/student-dashboard" element = {<StudentDashboard />} />
        <Route path="/mentor-dashboard" element = {<MentorDashboard />} />
        <Route path="/scholarship" element = {<Scholarship />} />
        <Route path="/webinar" element = {<Webinar />} />
        </Routes>
        {/* </BrowserRouter> */}
      {/* </Routes> */}
        {/* <Route path="/whatsapp-notification" component={WhatsAppNotification} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;