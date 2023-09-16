import React from 'react';
import './App.css';
import profile_img from './img/profile_picc.png'; // gives image path
import Lottie from "lottie-react";
import dev_profile_lottie from "./img/dev_profile_lottie.json";
import dev_profile from "./img/profile_dev.json";
import { techLogos, toolsLogos } from './techlist';


const ProfileApp = () => {
  return (
    <div className="" >
        
        <div className="section_divs px-8 md:px-0">
        {   <section className="profile_banne flex  container py-16 mx-auto">
                <div className="profile_banner_head content-center	 md:flex items-center columns-2xs justify-around	align-middle ">
                        <img src={profile_img} className="profile_logo md:w-1/2 md:max-w-xs rounded-full" alt="krishna" />
                        <div className="profile_banner md:w-1/2 mt-8">
                        <p className="text-[0.875rem]">
                          Front End Developer
                        </p>
                        <h2 className="font-bold text-[2.5rem] md:text-[3rem] mb-2">Krishna Chaitanya Malireddy</h2>
                        <p className="text-[1rem] text-base	 mb-10"> Hi, I'm having my bread and butter in Bengaluru.
                            Developer by day, Vampire Slayer by night
                            Besides having a full time carrier in IT industry, I love travelling and discussing about Share market.
                        </p>
                            <div className="profile_buttons">
                              <button className="px-8 py-3 border border-white-500 border-solid bg-transparent hover:bg-orange-700 rounded">Download Resume</button>
                            </div>
                    </div>
                </div>
            </section>}
        </div>
        <div className="section_divs px-8 md:px-0">
          {            <section className="section container py-16 mx-auto">
                <div className="box-main">
                    <div className="">
                    <h1 className="text-[2.5rem] sm:text-[4rem] py-6" id="program">
                            What I can do
                        </h1>
                    </div>
                    <div className="profile_banner_head content-center	 md:flex items-center columns-2xs justify-around	align-middle ">
                        <div className="md:w-1/2  md:mr-20  text-base my-6">
                        I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Don’t ask me about my graduation because I don’t know why I have done it. 
                        After completion of  my Bachelor's degree, I initially joined my family's business but soon realized it wasn't my true calling. I decided to pursue my passion for technology, relocated to a new city and dived into software courses. This journey led me to first job as a Software Developer at a startup, where I wore multiple hats, including Database Administrator and Full-stack Developer. My experiences with languages like JAVA, SQL, and PL-SQL, along with advanced web development, fueled my passion for software technologies.
                        <br /> <br />
                        I'm dedicated to staying at the forefront of this ever-evolving field and exploring emerging technologies."
                        <br /><br />
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </div>
                        <div className=" md:w-1/2  md: md:ml-20 ">
                            <Lottie animationData={dev_profile_lottie}  className="max-w-md relative m-auto"/>
                    </div>
                </div>
                </div>
            </section>}
        </div>
        <div className="section_divs px-8 md:px-0">
          {            <section className="section container py-16 mx-auto">
                <div className="box-main">
                    <div className="">
                    <h1 className=" text-[2.5rem] sm:text-[4rem] py-6" id="program">
                    Languages I speak
                        </h1>
                    </div>
                    <div className="profile_banner_head content-center	md:flex-row-reverse md:flex items-center columns-2xs justify-around	align-middle ">
                        <div className=" md:w-1/2  md:ml-20">
                            <p>"I am fluent in several programming languages, including HTML, CSS, JavaScript, Jquery, PHP and React." These languages are the fundamentals of contemporary web development, and they enable me to make interactive and user-friendly websites.
                            <br /> <br />In addition to coding languages, I am proficient in the use of essential frameworks such as Bootstrap, Sass for efficient CSS preprocessing and Tailwind CSS for streamlined styling. I have experience using GitHub for version control, Figma for design collaboration, WordPress for content management, and Visual Studio Code as my preferred integrated development environment. With the help of these tools, I can quickly and effectively deliver high-quality web solutions, ensuring a smooth development process from conception to deployment.
                            </p>
                        </div>
                        <div className="md:w-1/2 text-base my-6">
                            <div>
                                <h2 className='text-[1rem] mb-4'>Languages I speak:</h2>         
                                <div className='flex justify-between flex-col sm:flex-row'>
                                    {techLogos.map((tech, index) => (
                                        <img
                                        key={index} // Make sure to provide a unique key for each element when mapping
                                        src={tech.src}
                                        className="tech_logo md:max-w-[64px]"
                                        alt={tech.alt}
                                        />
                                    ))}
                                </div>
                            </div>


                                <div>
                                <h2 className='text-[1rem] mt-10 mb-4'>Tools I Use:</h2>
                                    <div className='flex justify-between flex-col sm:flex-row'>
                                        {toolsLogos.map((tool, index) => (
                                        <img
                                            key={index} // Make sure to provide a unique key for each element when mapping
                                            src={tool.src}
                                            alt={tool.alt}
                                            className="tech_logo md:max-w-[64px]"
                                        />
                                        ))}
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

export default ProfileApp;
