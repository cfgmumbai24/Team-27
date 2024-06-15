// components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        This is the dashboard. You can add content here.
      </p>
      <Link to="/student-dashboard">Student Dashboard</Link>
      <Link to="/mentor-dashboard">Mentor Dashboard</Link>
    </div>
  );
};

export default Dashboard;