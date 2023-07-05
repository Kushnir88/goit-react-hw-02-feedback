import React from 'react';
import '../styles.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback-options">
      {options.map((option) => (
        <button key={option} className="feedback-option-button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
