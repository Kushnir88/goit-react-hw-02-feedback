import React from 'react';
import '../styles.css';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className="statistics">
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total Feedback: {total}</p>
        <p>Positive Feedback Percentage: {positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
