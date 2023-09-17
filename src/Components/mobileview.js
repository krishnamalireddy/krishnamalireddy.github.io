import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MobileNav.css'; // Import your CSS file

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list md:flex ${isMenuOpen ? 'active' : ''}`}>
        <li className="px-8 py-4 md:py-0">
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className="px-8 py-4 md:py-0">
          <Link to="/contact/" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li className="px-8 py-4 md:py-0">
          <Link to="/privacy-policy/" onClick={closeMenu}>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
