import React, { useState } from 'react';
import Routeslink from './Pageroutes';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import MobileNav from './Components/mobileview.js';
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
        </div>        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

       <MobileNav />
      </nav>
      <Routeslink />
      <footer className="footer py-8">
        <div className="container mx-auto text-footer justify-between flex ">
          <p>&copy; All rights are reserved 2023</p>
          <ul classname="list-none">
            <li classname="px-8 py-4 md:py-0">
              <Link to="/privacy-policy/" >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;
