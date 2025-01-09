// src/BookButton.js
import React from 'react';
import '../style/Button.css'; // Import the styling for the button

const Button = ({ onClick, label = "Button" }) => {
  return (
    <button className="book-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
