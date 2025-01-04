// src/component/BackToHomeButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/BackToHomeButton.css'; // Create a separate CSS file for styling

function BackToHomeButton() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Navigate to the home page
  const handleBackToHome = () => {
    navigate('/'); // Adjust the path to your home page route
  };

  return (
    <button className="back-to-home-btn" onClick={handleBackToHome}>
      Back to Home
    </button>
  );
}

export default BackToHomeButton;
