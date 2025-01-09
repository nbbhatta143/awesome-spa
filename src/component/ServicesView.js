// import React from 'react';
// import SpaCard from './SpaCard'; 
// import { useNavigate } from 'react-router-dom';

// function ServicesView({ images, servicesName }) {
//   const navigate = useNavigate();

//   // Handle card navigation
//   const handleServiceNavigation = (service) => {
//     const name = service.alt.toLowerCase().replace(/\s+/g, '-'); // Create a slug for the service name
//     navigate(`/details/${name}`, { state: { service } }); // Pass service details via state
//   };

//   return (
//     <>
//       <h4 className="Services-header">{servicesName}</h4>
//       {images.map((service, index) => (
//         <div
//           key={index}
//           onClick={() => handleServiceNavigation(service)} // Navigate to detail view on click
//         >
//           <SpaCard 
//             images={[service]} // Pass only the specific service as an array
//             displayButton={false} // Hide the button in this context
//             placeholder={index}
//           />
//         </div>
//       ))}
    
//     </>
//   );
// }

// export default ServicesView;
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
        <div className="modal-overlay" onClick={handleClosePopup}>
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
