// src/Footer.js
import React from 'react';
import Nav from '../component/Navbar'; // Import the existing Nav component for footer usage
import '../style/footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-nav">
          <Nav isFooter={false} /> {/* Pass a prop to disable hamburger menu in the footer */}
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Spa Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
