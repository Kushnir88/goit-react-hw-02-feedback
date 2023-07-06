import React from 'react';
import '../styles.css';

class Notification extends React.Component {
  render() {
    const { message } = this.props;

    return <p className="notification">{message}</p>;
  }
}

export default Notification;
