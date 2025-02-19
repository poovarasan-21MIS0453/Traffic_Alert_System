import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/notifications');
        setNotifications(response.data);
      } catch (err) {
        setError('Failed to fetch notifications');
        console.error(err);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <li key={notification._id}>
              <p>Day: {notification.day}</p>
              <p>Hour: {notification.hour}</p>
              <p>Average Speed: {notification.avg_speed} km/h</p>
              <p>Result: {notification.result}</p>
              <hr />
            </li>
          ))
        ) : (
          <p>No notifications available</p>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
