import React from 'react';
import '../styles.css';

class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className="feedback-options">
        {options.map((option) => (
          <button key={option} className="feedback-option-button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
