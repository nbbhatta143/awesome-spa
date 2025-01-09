import React from 'react';
import SpaCard from './SpaCard'; 
import { useNavigate } from 'react-router-dom';

function ServicesView({ images, servicesName }) {
  const navigate = useNavigate();

  // Handle card navigation
  const handleServiceNavigation = (service) => {
    const name = service.alt.toLowerCase().replace(/\s+/g, '-'); // Create a slug for the service name
    navigate(`/details/${name}`, { state: { service } }); // Pass service details via state
  };

  return (
    <>
      <h4 className="Services-header">{servicesName}</h4>
      {images.map((service, index) => (
        <div
          key={index}
          onClick={() => handleServiceNavigation(service)} // Navigate to detail view on click
        >
          <SpaCard 
            images={[service]} // Pass only the specific service as an array
            displayButton={false} // Hide the button in this context
            placeholder={index}
          />
        </div>
      ))}
    
    </>
  );
}

export default ServicesView;
