import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MentorDashboard = () => {
  const [mentees, setMentees] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchMentees = async () => {
      const response = await axios.get('http://localhost:5000/api/mentees');
      setMentees(response.data);
    };
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:5000/api/user');
      setUser(response.data);
    };
    fetchMentees();
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Mentor Dashboard</h1>
      <p>
        Welcome, {user ? user.name : 'Please login'}!
        <Link to="/login">Login</Link>
      </p>
      <h2>Mentees:</h2>
      <ul>
        {mentees.map((mentee) => (
          <li key={mentee._id}>
            <p>{mentee.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorDashboard;