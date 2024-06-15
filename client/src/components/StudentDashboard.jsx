import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:5000/api/user');
      setUser(response.data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>
        Welcome, {user ? user.username : 'Please login'}!
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default StudentDashboard;