import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WhatsAppNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await axios.get('http://localhost:5000/api/notifications');
      setNotifications(response.data);
    };
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:5000/api/user');
      setUser(response.data);
    };
    fetchNotifications();
    fetchUser();
  }, []);

  return (
    <div>
      <h1>WhatsApp Notification</h1>
      <p>
        Welcome, {user ? user.username : 'Please login'}!
        <Link to="/login">Login</Link>
      </p>
      <h2>Notifications:</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>
            <p>{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatsAppNotification;