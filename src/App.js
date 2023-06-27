import React from 'react';
import './App.css';
import logo from './kc-logos/kc-logos.png'; // gives image path
import profile_img from './img/profile_picc.png'; // gives image path
import sass_tech from './img/sass.svg'; 
import wordpress_tech from './img/wordpress.svg'; 
import html_tech from './img/html.svg'; 
import react_tech from './img/react.svg'; 
import css_tech from './img/css.svg'; 
import js_tech from './img/js.svg';
import tailwind_tech from './img/tailwind-css.svg';
import Lottie from "lottie-react";
import dev_profile_lottie from "./img/dev_profile_lottie.json";
import dev_profile from "./img/profile_dev.json";
  
function App() {
    return (
        <div className="bg-black text-white"> 
            <nav className="navbar background">
                <ul className="nav-list">
                    <div className="logo">
                        <img src={logo} className="logo_kc max-w-[7rem]" alt="kc" />
                    </div>
                    <li><a href="#courses">Courses</a></li>
                </ul>
            </nav>
  
            <section className="profile_banne flex h-screen px-20">
                <div className="profile_banner_head content-center	 flex items-center columns-2xs justify-around	align-middle ">
                        <img src={profile_img} className="profile_logo w-[50%] max-w-xs rounded-full" alt="krishna" />
                        <div className="profile_banner w-[50%]">
                        <p className="text-[0.875rem]">
                          Front End Developer
                        </p>
                        <h2 className="font-bold text-[3rem] mb-2">Krishna Chaitanya Malireddy</h2>
                        <p className="text-[1rem] text-base	 mb-10"> Hi, I'm having my bread and butter in Bengaluru.
Developer by day, Vampire Slayer by night
Besides having a full time carrier in IT industry, I love travelling and photography.</p>
                            <div className="profile_buttons">
                              <button className="text-white px-4 sm:px-8 py-2 sm:py-3 border border-white-500 border-solid bg-transparent hover:bg-sky-800 rounded">Download Resume</button>
                            </div>
                    </div>
                </div>
            </section>
            <section className="section px-20">
                <div className="box-main">
                    <div className="">
                    <h1 className="text-[4rem] py-6" id="program">
                            What I can do
                        </h1>
                    </div>
                    <div className="profile_banner_head content-center	 flex items-center columns-2xs justify-around	align-middle ">
                        <div className="w-[50%] mr-20  text-base my-6">
                        I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                        I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
                        <br /> <br />
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </div>
                        <div className=" w-[50%] ml-20 ">
                            <Lottie animationData={dev_profile}  className="max-w-md relative top-[-4rem]"/>
                    </div>
                </div>
                </div>
            </section>
            <section className="section px-20">
                <div className="box-main">
                    <div className="">
                    <h1 className="text-[4rem] py-6" id="program">
                    Languages I speak
                        </h1>
                    </div>
                    <div className="profile_banner_head content-center	 flex items-center columns-2xs justify-around	align-middle ">
                        <div className=" w-[50%] mr-20">
                            <Lottie animationData={dev_profile_lottie} />
                        </div>
                        <div className="w-[50%] ml-20  text-base	 my-6">
                            <h2 className='text-[2rem] mb-10'>Languages I speak:</h2>
                            <div className='flex'>
                            <img src={html_tech} className="tech_logo" alt="html" />
                            <img src={css_tech} className="tech_logo" alt="css" />
                            <img src={js_tech} className="tech_logo" alt="js" />
                            <img src={react_tech} className="tech_logo" alt="react" />
                            <img src={sass_tech} className="tech_logo" alt="sass" />
                            <img src={tailwind_tech} className="tech_logo" alt="Tailwind" />
                            <img src={wordpress_tech} className="tech_logo" alt="wordpress" />
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}
  
export default App;
