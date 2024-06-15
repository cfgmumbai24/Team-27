import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Scholarship = () => {
  const [scholarships, setScholarships] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      const response = await axios.get('http://localhost:5000/api/scholarships');
      setScholarships(response.data);
    };
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:5000/api/user');
      setUser(response.data);
    };
    fetchScholarships();
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Scholarship</h1>
      <p>
        Welcome, {user ? user.username : 'Please login'}!
        <Link to="/login">Login</Link>
      </p>
      <h2>Scholarships:</h2>
      <ul>
        {scholarships.map((scholarship) => (
          <li key={scholarship._id}>
            <p>{scholarship.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scholarship;