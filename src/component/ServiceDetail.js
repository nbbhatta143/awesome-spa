
// // import React from 'react';
// // import { useLocation, useParams } from 'react-router-dom';

// // function ServiceDetail() {
// //   const { serviceName } = useParams(); // Get the service name from the URL
// //   const location = useLocation(); // Access the passed state
// //   const service = location.state?.service; // Retrieve the specific service details

// //   if (!service) {
// //     return <p>Service not found. Please go back and select a valid service.</p>;
// //   }

// //   return (
// //     <div className="service-detail">
// //       <h2>{service.alt}</h2>
// //       <img src={service.src} alt={service.alt} />
// //       <p>{service.description}</p>
// //       <p>Price: ${service.price}</p>
// //     </div>
// //   );
// // }

// // export default ServiceDetail;
// import React from 'react';
// import { useLocation, useParams,useNavigate } from 'react-router-dom';
// import '../style/ServiceDetail.css';
// import BookButton from './BookButton';

// function ServiceDetail() {
//   const { serviceName } = useParams(); // Extract serviceName from the URL
//   const location = useLocation(); // Access the state passed via navigate
//   const service = location.state?.service;
//   const navigate = useNavigate()
//   const handleback =()=>{
//     navigate(-2)
//   }

//   if (!service) {
//     return <p>Service not found. Please go back and select a valid service.</p>;
//   }
//   // Handle booking navigation
//   const handleBooking = (serviceName, event) => {
//     event.stopPropagation(); // Prevent card navigation
//     navigate(`/booking/${serviceName}`);
//   };
//   return (
//     <div className="service-detail-container">
//       <div className="service-detail">
//         <div className="service-image">
//           <img src={service.src} alt={service.alt} />
//         </div>
//         <div className="service-info">
//           <h2 className="service-title">{service.alt}</h2>
//           <p className="service-description">{service.description}</p>
//           <p className="service-price">Price: ${service.price}</p>
//         </div>
//         <BookButton onClick={handleback}label='Back'/>
//         <BookButton  onClick={(event) => handleBooking(service.alt, event)} label='Schedule'/>
//       </div>
//     </div>
//   );
// }

// export default ServiceDetail;
import React from 'react';
import '../style/ServiceDetail.css';
import BookButton from './BookButton';
import { useNavigate } from 'react-router-dom';

function ServiceDetail({ service, handleClose }) {
  const navigate = useNavigate()
  // Handle booking navigation
  const handleBooking = (serviceName, event) => {
    event.stopPropagation(); // Prevent card navigation
    handleClose();  // Close the modal after clicking "Schedule"
    navigate(`/booking/${serviceName}`);
  };

  return (
    <div className="service-detail-container">
      <div className="service-detail">
        <div className="service-image">
          <img src={service.src} alt={service.alt} />
        </div>
        <div className="service-info">
          <h2 className="service-title">{service.alt}</h2>
          <p className="service-description">{service.description}</p>
          <p className="service-price">Price: ${service.price}</p>
        </div>
        {/* <BookButton onClick={handleClose} label="Back" />  Close the modal */}
        <BookButton onClick={(event) => handleBooking(service.alt, event)} label="Schedule" />
      </div>
    </div>
  );
}

export default ServiceDetail;
