import React from 'react';
import HorizontalScroll from './website';
import logo from './kc-logos/kc-logos.png'; // gives image path


  
function App() {
    return (
        <div className="bg-black text-white "> 
            <nav className="navbar background px-20">
                <ul className="nav-list flex justify-between items-center align-middle">
                    <div className="logo">
                        <img src={logo} className="logo_kc max-w-[7rem]" alt="kc" />
                    </div>
                    <li><a href="#courses">Courses</a></li>
                </ul>
            </nav>
  
            <HorizontalScroll />



            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}
  
export default App;
