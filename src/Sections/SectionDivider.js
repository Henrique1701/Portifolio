import React from 'react';
// import './SectionDivider.css';

const SectionDivider = ({ text }) => {
  return (
    <div className="section-divider">
      {text && <span className="divider-text">{text}</span>}
      <hr className="divider-line" />
    </div>
  );
};

export default SectionDivider;
