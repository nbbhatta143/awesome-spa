// src/BookButton.js
import React from 'react';
import '../style/BookButton.css'; // Import the styling for the button

const BookButton = ({ onClick, label = "Schedule" }) => {
  return (
    <button className="book-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default BookButton;
