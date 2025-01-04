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
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="logo">
            <ul> <li><a href='#/'>{title}</a></li></ul>
          </div>
          <div className={!isFooter? 'footer': `menu ${isOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#tint" onClick={closeMenu}>Tint</a></li>
              <li><a href="#facial" onClick={closeMenu}>Threading</a></li>
              <li><a href="#wax" onClick={closeMenu}>Wax</a></li>
              <li><a href="#henna" onClick={closeMenu}>Henna Tatto</a></li>
              <li><a href="#facial" onClick={closeMenu}>Facial</a></li>
              <li><a href="#/" onClick={closeMenu}>Home</a></li>
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
      </header>

    </div>
  );
}


export default Navbar;
