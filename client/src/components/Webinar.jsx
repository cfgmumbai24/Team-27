import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Webinar = () => {
  const [webinars, setWebinars] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchWebinars = async () => {
      const response = await axios.get('http://localhost:5000/api/webinars');
      setWebinars(response.data);
    };
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:5000/api/user');
      setUser(response.data);
    };
    fetchWebinars();
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Webinar</h1>
      <p>
        Welcome, {user ? user.username : 'Please login'}!
        <Link to="/login">Login</Link>
      </p>
      <h2>Webinars:</h2>
      <ul>
        {webinars.map((webinar) => (
          <li key={webinar._id}>
            <p>{webinar.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Webinar;