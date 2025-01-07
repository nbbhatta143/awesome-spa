// src/Tint.js
import React from 'react';
import SpaCard from './SpaCard'; 



function ServicesView({images, servicesName}) {
  return (
    <div className="Services-container">
      <h1 className="Services-header">{servicesName}</h1>
      <div className="spa-card-list">
        <SpaCard images={images}displayButton={true} />
      </div>
    </div>
  );
}

export default ServicesView;
