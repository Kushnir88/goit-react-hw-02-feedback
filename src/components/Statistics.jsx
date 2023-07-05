import React from 'react';
import '../styles.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statistics">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total Feedback: {total}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
