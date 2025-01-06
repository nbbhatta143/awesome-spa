// src/Tint.js
import React from 'react';
import SpaCard from './SpaCard'; // Import the SpaCard component

import '../style/Tint.css'; // Optional: Create and link styles specific to Tint view
// import BackToHomeButton from './BackToHomeButton'; // Import the BackToHomeButton component

import relaxing from "../images/sddefault.jpg"
import skiltreatment from "../images/the-dermalogica-skin-treatment.png"
import hot_stone_massage from "../images/1296x728_HEADER_benefits-of-hot-stone-massage.jpg"

// Sample data for spa services
const spaServices = [
  {
    src:  relaxing,
    alt: 'Relaxing Massage',
    description: 'Experience the ultimate relaxation with our soothing massages.',
    price: 120,
  },
  {
    src: skiltreatment,
    alt: 'Facial Treatment',
    description: 'Rejuvenate your skin with our revitalizing facial treatments.',
    price: 90,
  },
  {
    src: hot_stone_massage,
    alt: 'Hot Stone Therapy',
    description: 'Relieve tension with our hot stone therapy session.',
    price: 150,
  },
];

function Tint() {
 
  return (
    <div className="tint-container">
      <h1 className="tint-header">Tinting Services</h1>
      <div className="spa-card-list">
        <SpaCard images={spaServices}displayButton={true} />
      </div>
    </div>
  );
}

export default Tint;
