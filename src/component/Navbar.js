// src/App.js
import React, { useState } from 'react';
import '../style/App.css'; // We'll use this for custom styles



function Navbar({title, isFooter}) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Close the menu when a navigation item is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

 
  return (
    <nav className="navbar">
      <div className="logo">
        <ul> 
          <li><a href='#/'><h2>{title}</h2></a></li>
        </ul>
      </div>
      
      <div className={!isFooter? 'footer': `menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#/" onClick={closeMenu}>Home</a></li>
          <li><a href="#facial" onClick={closeMenu}>Facial</a></li>
          <li><a href="#waxing" onClick={closeMenu}>Wax</a></li>
          <li><a href="#henna" onClick={closeMenu}>Henna</a></li>
          <li><a href="#threading" onClick={closeMenu}>Threading</a></li>
          <li><a href="#tinting" onClick={closeMenu}>Tint</a></li>
        </ul>
      </div>
      {isFooter && (
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}

    </nav>
  );
}


export default Navbar;
