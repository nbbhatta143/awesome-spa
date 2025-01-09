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
