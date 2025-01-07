// src/Tint.js
import React from 'react';
import SpaCard from './SpaCard'; 



function ServicesView({images, servicesName}) {
  const isLogoVisible = true
  return (
    <div className="service-container">
      <h4 className="Services-header">{servicesName}</h4>
      <div className="spa-card-list">
        <SpaCard images={images}displayButton={true} />
      </div>
    </div>
  );
}

export default ServicesView;
