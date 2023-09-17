import React, { useState } from 'react';
import Routeslink from './Pageroutes';
import { BrowserRouter as Router } from 'react-router-dom';
import Newtab from './Components/opennewtab.js';
import { Link } from 'react-router-dom';
import logo from './kc-logos/kc-logos.png';
import DarkModeToggle from './darkmode';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router  basename={process.env.PUBLIC_URL}>
    <div className={isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}>
      <nav className="flex justify-around	align-middle items-center navbar background md:px-20">
        <div className="logo">
          <img src={logo} className="logo_kc max-w-[10rem]" alt="kc" />
        </div>
        <ul className="nav-list flex justify-between items-center align-middle">
          <li className="px-8">
            <Link to="/">Home</Link>
          </li>
          <li className="px-8">
          <Newtab to="/contact" buttonText="contact" />
          </li>
          <li className="px-8">
            <Link to="/privacy-policy/">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </nav>
      <Routeslink />
      <footer className="footer">
        <div className="container mx-auto text-footer">
          <p>&copy; All rights are reserved 2023</p>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;
