import React from 'react';
import '../styles.css';

const Notification = ({ message }) => {
  return <p className="notification">{message}</p>;
};

export default Notification;
