import React from 'react';
import './Widget.css';

const Widget = ({ title }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <p>Content for {title} goes here.</p>
    </div>
  );
};

export default Widget;
