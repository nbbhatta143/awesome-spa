// src/SpaCard.js
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/SpaCard.css';
import BookButton from '../component/BookButton';

function SpaCard({ images,displayButton }) {
  const navigate = useNavigate();
  const cardRefs = useRef([]); // Create refs for all cards

  // Handle booking navigation
  const handleBooking = (serviceName, event) => {
    event.stopPropagation(); // Prevent card navigation
    navigate(`/booking/${serviceName}`);
  };

  // Handle card navigation
  const handleServiceNavigation = (serviceName) => {
    if (serviceName === 'Tinting Service') {
      navigate('/tint');
    }else if(serviceName === 'Threading'){
      navigate('/threading')
    }
  };

  // Add scroll effect using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class when in view
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    cardRefs.current.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return images.map((image, index) => (
    <div
      key={index}
      className={`spa-card ${index % 2 === 1 ? 'reverse' : ''}`}
      ref={(el) => (cardRefs.current[index] = el)} // Assign ref to each card
      onClick={() => handleServiceNavigation(image.alt)}
    >
      <div className="spa-card-image">
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="spa-card-content">
        <h3>{image.alt}</h3>
        <p>{image.description}</p>
        
        {
          displayButton ?
          <> 
            <p className="price">${image.price}</p>
            <BookButton onClick={(event) => handleBooking(image.alt, event)} label='Schedule' /> 
          </>
           
          : ""
        }
      </div>
    </div>
  ));
}

export default SpaCard;
