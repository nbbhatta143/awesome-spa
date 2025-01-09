import React, { useState } from 'react';
import SpaCard from './SpaCard'; 
import ServiceDetail from './ServiceDetail';  // Import ServiceDetail

function ServicesView({ images, servicesName }) {
  const [selectedService, setSelectedService] = useState(null);  // Stores the selected service
  const [showDetail, setShowDetail] = useState(false);  // Controls modal visibility
  const [slideIn, setSlideIn] = useState(false); // State to control the slide-in effect

  // Handle card click to display the service detail modal
  const handleServiceNavigation = (service) => {
    setSelectedService(service);  // Set the selected service data
    setShowDetail(true);  // Show the modal
    setTimeout(()=> setSlideIn(true), 50)
  };

  // Close the modal
  const handleClosePopup = () => {
    setSlideIn(false);  // Slide out first
    setTimeout(() => {
      setShowDetail(false);  
      setSelectedService(null);  
    }, 500); 
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
          <div className={`modal-content ${slideIn ? 'slide-in' : 'slide-out'}`}>
            <div   onClick={(e) => e.stopPropagation()}> 
            <ServiceDetail 
              service={selectedService} 
              handleClose={handleClosePopup}  
            />
            </div>
           
          </div>
        </div>
      )}
    </>
  );
}

export default ServicesView;
