import React from 'react';
import './ScrollDown.css';

const ScrollDown = () => {
  return (
    <div className="scroll-down-container">
      <div className="scroll-down">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <span className="scroll-text">Scroll</span>
      </div>
    </div>
  );
};

export default ScrollDown; 