import React from 'react';
import '../styles.css';

class Section extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="section">
        <h1 className="section-title">{title}</h1>
        {children}
      </div>
    );
  }
}

export default Section;
