import React from 'react';
import './style.css';

const Booth = ({img, description}) => {
  return (
    <div className="booth-item">
        <a href={img}><img src={img}/></a>
        <div className="description">{description}</div>
    </div>
  );
};

export default Booth;