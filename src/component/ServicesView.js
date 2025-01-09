import React, { useState } from 'react';
import SpaCard from './SpaCard'; 
import ServiceDetail from './ServiceDetail';  // Import ServiceDetail

function ServicesView({ images, servicesName }) {
  const [selectedService, setSelectedService] = useState(null);  // Stores the selected service
  const [showDetail, setShowDetail] = useState(false);  // Controls modal visibility

  // Handle card click to display the service detail modal
  const handleServiceNavigation = (service) => {
    setSelectedService(service);  // Set the selected service data
    setShowDetail(true);  // Show the modal
  };

  // Close the modal
  const handleClosePopup = () => {
    setShowDetail(false);  // Hide the modal
    setSelectedService(null);  // Clear the selected service
  };

  return (
    <>
      <h4 className="Services-header">{servicesName}</h4>
      {images.map((service, index) => (
        <div key={index} onClick={() => handleServiceNavigation(service)}>
          <SpaCard 
            images={[service]}  // Pass only the specific service as an array
            displayButton={false}  // Don't show the button in this context
            placeholder={index}
            displayDetail={true}
          />
        </div>
      ))}
      {/* If modal is active, show the ServiceDetail in a modal */}
      {showDetail && selectedService && (
        <div className={`modal-overlay ${showDetail ? 'show' : ''}`} onClick={handleClosePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ServiceDetail 
              service={selectedService} 
              handleClose={handleClosePopup} 
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ServicesView;
