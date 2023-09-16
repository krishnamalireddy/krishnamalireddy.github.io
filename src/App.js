import React, { useState }  from 'react';
import ProfileApp from './website';
import logo from './kc-logos/kc-logos.png'; // gives image path
import DarkModeToggle from './darkmode'; // Replace with the correct path


  
function App() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };


    return (
        <div className={isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}>
        <nav className="navbar background md:px-20">
                <ul className="nav-list flex justify-between items-center align-middle">
                    <div className="logo">
                        <img src={logo} className="logo_kc max-w-[10rem]" alt="kc" />
                    </div>
                    <li><a href="#courses">Courses</a></li>
                    <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

                </ul>
            </nav>
  
            <ProfileApp />

            <footer className="footer">
      <div className="container mx-auto text-footer">
        <p>&copy; All rights are reserved 2023</p>
      </div>
    </footer>
        </div>
    )
}
  
export default App;
