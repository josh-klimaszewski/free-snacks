import React from 'react';
import './style.css';

const Booth = ({img, description}) => {
  return (
    <div className="booth-item">
        <img src={img}/>
        <div className="description">{description}</div>
    </div>
  );
};

export default Booth;