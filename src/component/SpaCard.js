// src/SpaCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../style/SpaCard.css'; // You can create a separate CSS file for the SpaCard
import BookButton from '../component/BookButton'

function SpaCard({ images }) {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Navigate to the booking page with the service name as a URL parameter
  const handleBooking = (serviceName) => {
    navigate(`/booking/${serviceName}`);
  };

  return (
    //  reverse
    images.map((image, index) => 
      <div className={`spa-card ${index % 2 === 1 ? 'reverse' : ''}`}>
        <div className="spa-card-image">
          <img src={image.src} alt={image.alt} />
        </div>
        <div className="spa-card-content">
          <h3>{image.alt}</h3>
          <p>{image.description}</p>
          <p className="price">${image.price}</p>
          <BookButton onClick={() => handleBooking(image.alt)} />
        </div>
      </div>
    )
  )}

export default SpaCard;
