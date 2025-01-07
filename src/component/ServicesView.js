// // src/Tint.js
// import React from 'react';
// import SpaCard from './SpaCard'; 
// import { useNavigate } from 'react-router-dom';


// function ServicesView({images, servicesName}) {
//   const navigate = useNavigate();
//    // Handle card navigation
//     const handleServiceNavigation = (serviceName) => {
//       const name = serviceName.toLowerCase();
//       navigate(`/${name}`);
//     };
//   return (
//     <div className="service-container"
//       onClick={() => handleServiceNavigation(servicesName)}
//     >
//       <h4 className="Services-header">{servicesName}</h4>
//       <div className="spa-card-list">
//         <SpaCard images={images} displayButton={true} />
//       </div>
//     </div>
//   );
// }
// export default ServicesView;
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
    <div className="service-container">
      <h4 className="Services-header">{servicesName}</h4>
      <div className="spa-card-list">
        {images.map((service, index) => (
          <div
            key={index}
            onClick={() => handleServiceNavigation(service)} // Navigate to detail view on click
            className="spa-card-wrapper"
          >
            <SpaCard 
              images={[service]} // Pass only the specific service as an array
              displayButton={false} // Hide the button in this context
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesView;
