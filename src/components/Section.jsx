import React from 'react';
import '../styles.css';

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h1 className="section-title">{title}</h1>
      {children}
    </div>
  );
};

export default Section;
