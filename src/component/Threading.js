// src/Tint.js
import React from 'react';
import SpaCard from './SpaCard'; // Import the SpaCard component

import '../style/Tint.css'; // Optional: Create and link styles specific to Tint view
// import BackToHomeButton from './BackToHomeButton'; // Import the BackToHomeButton component

import threading from "../images/threading_1.jpg"
import chin from "../images/chin_threading.jpg"
import fullface from "../images/full_face.jpg"

// Sample data for spa services
const threadingServices = [
  {
    src:  threading,
    alt: 'Eyebrow',
    description: 'Divine Offers expert eyebrow threading services, with skilled professionals remove hairs with care in rows rather than individually. Visit us to connect with our top brow threader for the best service.',
    price: 120,
  },
  {
    src: chin,
    alt: 'Upper Lip, Chin, Sides And Forehead',
    description: 'Professional threading services for the upper lip, chin, sides, and forehead, ensuring a smooth and precise result for every area.',
    price: 90,
  },
  {
    src: fullface,
    alt: 'Full Face',
    description: 'Experience flawless skin with our full face threading service, tailored to perfection.',
    price: 150,
  },
];

function Threading() {
 
  return (
    <div className="tint-container">
      <h1 className="tint-header">Threading Services</h1>
      <div className="spa-card-list">
        <SpaCard images={threadingServices} displayButton={true} />
      </div>
    </div>
  );
}

export default Threading;
