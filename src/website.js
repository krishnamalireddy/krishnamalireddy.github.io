import React, { useRef, useEffect } from 'react';
import './App.css';
import profile_img from './img/profile_picc.png'; // gives image path
import sass_tech from './img/sass.svg'; 
import wordpress_tech from './img/wordpress.svg'; 
import html_tech from './img/html.svg'; 
import react_tech from './img/react.svg'; 
import css_tech from './img/css.svg'; 
import js_tech from './img/js.svg';
import bootstrap_tech from './img/bootstrap.svg';
import tailwind_tech from './img/tailwind-css.svg';
import figma_tech from './img/figma.svg';
import github_tech from './img/github.svg';
import vscode_tech from './img/vs-code.svg';
import Lottie from "lottie-react";
import dev_profile_lottie from "./img/dev_profile_lottie.json";
import dev_profile from "./img/profile_dev.json";

const HorizontalScroll = () => {
    const containerRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = (event) => {
        event.preventDefault();
        const container = containerRef.current;
        const { scrollY } = window;
  
        if (container) {
          // Determine the current section based on the vertical scroll position
          const currentSectionIndex = Math.floor(scrollY / window.innerHeight);
          const nextSectionTop = currentSectionIndex * window.innerWidth;
  
          // Snap to the next horizontal section
          container.scrollTo({
            left: nextSectionTop,
            behavior: 'smooth',
          });
        }
      };
  
      window.addEventListener('scroll', handleScroll, { passive: false });
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className="horizontal-website" ref={containerRef}>
        
        <div className="flex-none w-screen mr-4 horizontal-scroll">
        {   <section className="profile_banne flex h-screen px-20">
                <div className="profile_banner_head content-center	 md:flex items-center columns-2xs justify-around	align-middle ">
                        <img src={profile_img} className="profile_logo md:w-1/2 max-w-xs rounded-full" alt="krishna" />
                        <div className="profile_banner md:w-1/2">
                        <p className="text-[0.875rem]">
                          Front End Developer
                        </p>
                        <h2 className="font-bold text-[3rem] mb-2">Krishna Chaitanya Malireddy</h2>
                        <p className="text-[1rem] text-base	 mb-10"> Hi, I'm having my bread and butter in Bengaluru.
                            Developer by day, Vampire Slayer by night
                            Besides having a full time carrier in IT industry, I love travelling and photography.
                        </p>
                            <div className="profile_buttons">
                              <button className="text-white px-4 sm:px-8 py-2 sm:py-3 border border-white-500 border-solid bg-transparent hover:bg-sky-800 rounded">Download Resume</button>
                            </div>
                    </div>
                </div>
            </section>}
        </div>
        <div className="flex-none w-screen mr-4 horizontal-scroll">
          {            <section className="section px-20">
                <div className="box-main">
                    <div className="">
                    <h1 className="text-[4rem] py-6" id="program">
                            What I can do
                        </h1>
                    </div>
                    <div className="profile_banner_head content-center	 md:flex items-center columns-2xs justify-around	align-middle ">
                        <div className="md:w-1/2  md:mr-20  text-base my-6">
                        I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                        I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
                        <br /> <br />
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </div>
                        <div className=" md:w-1/2  md: md:ml-20 ">
                            <Lottie animationData={dev_profile}  className="max-w-md relative top-[-4rem]"/>
                    </div>
                </div>
                </div>
            </section>}
        </div>
        <div className="flex-none w-screen mr-4 horizontal-scroll">
          {            <section className="section px-20">
                <div className="box-main">
                    <div className="">
                    <h1 className="text-[4rem] py-6" id="program">
                    Languages I speak
                        </h1>
                    </div>
                    <div className="profile_banner_head content-center	 md:flex items-center columns-2xs justify-around	align-middle ">
                        <div className=" md:w-1/2  md:mr-20">
                            <Lottie animationData={dev_profile_lottie} />
                        </div>
                        <div className="md:w-1/2  md:ml-20  text-base my-6">
                            <div>
                                <h2 className='text-[2rem] mb-10'>Languages I speak:</h2>
                                <div className='flex justify-between'>
                                    <img src={html_tech} className="tech_logo md:max-w-[64px]" alt="html" />
                                    <img src={css_tech} className="tech_logo md:max-w-[64px]" alt="css" />
                                    <img src={js_tech} className="tech_logo md:max-w-[64px]" alt="js" />
                                    <img src={react_tech} className="tech_logo md:max-w-[64px]" alt="react" />
                                    <img src={sass_tech} className="tech_logo md:max-w-[64px]" alt="sass" />
                                    <img src={tailwind_tech} className="tech_logo md:max-w-[64px]" alt="Tailwind" />
                                    <img src={bootstrap_tech} className="tech_logo md:max-w-[64px]" alt="bootstrap" />
                                </div>
                            </div>
                            <div>
                                <h2 className='text-[2rem] my-10'>Tools I Use:</h2>
                                <div className='flex justify-between'>
                                    <img src={wordpress_tech} className="tech_logo md:max-w-[64px]" alt="wordpress" />
                                    <img src={figma_tech} className="tech_logo md:max-w-[64px]" alt="figma" />
                                    <img src={github_tech} className="tech_logo md:max-w-[64px]" alt="github" />
                                    <img src={vscode_tech} className="tech_logo md:max-w-[64px]" alt="vscode" />
                                </div>
                            </div>      
                        </div>
                    </div>
                    </div>
            </section>}
        </div>
        <div className="flex-none w-screen mr-4 horizontal-scroll">
          {            <section className="section px-20">
                <div className="box-main">
                    <div className="">
                    <h1 className="text-[4rem] py-6" id="program">
                    Languages I speak
                        </h1>
                    </div>
                    <div className="profile_banner_head content-center	 md:flex items-center columns-2xs justify-around	align-middle ">
                        <div className=" md:w-1/2  md:mr-20">
                            <Lottie animationData={dev_profile_lottie} />
                        </div>
                        <div className="md:w-1/2  md:ml-20  text-base my-6">
                            <div>
                                <h2 className='text-[2rem] mb-10'>Languages I speak:</h2>
                                <div className='flex justify-between'>
                                    <img src={html_tech} className="tech_logo md:max-w-[64px]" alt="html" />
                                    <img src={css_tech} className="tech_logo md:max-w-[64px]" alt="css" />
                                    <img src={js_tech} className="tech_logo md:max-w-[64px]" alt="js" />
                                    <img src={react_tech} className="tech_logo md:max-w-[64px]" alt="react" />
                                    <img src={sass_tech} className="tech_logo md:max-w-[64px]" alt="sass" />
                                    <img src={tailwind_tech} className="tech_logo md:max-w-[64px]" alt="Tailwind" />
                                    <img src={bootstrap_tech} className="tech_logo md:max-w-[64px]" alt="bootstrap" />
                                </div>
                            </div>
                            <div>
                                <h2 className='text-[2rem] my-10'>Tools I Use:</h2>
                                <div className='flex justify-between'>
                                    <img src={wordpress_tech} className="tech_logo md:max-w-[64px]" alt="wordpress" />
                                    <img src={figma_tech} className="tech_logo md:max-w-[64px]" alt="figma" />
                                    <img src={github_tech} className="tech_logo md:max-w-[64px]" alt="github" />
                                    <img src={vscode_tech} className="tech_logo md:max-w-[64px]" alt="vscode" />
                                </div>
                            </div>      
                        </div>
                    </div>
                    </div>
            </section>}
        </div>
    </div>
  );
};

export default HorizontalScroll;
