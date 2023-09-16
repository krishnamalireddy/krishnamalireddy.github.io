import React from 'react';
import '../App.css';
import profile_img from '../img/profile_picc.png'; // gives image path
import Lottie from "lottie-react";
import dev_profile_lottie from "../img/dev_profile_lottie.json";
import { techLogos, toolsLogos } from '../techlist';


const ProfileApp = () => {
  return (
    <div className="" >
        
        <div className="section_divs px-8 md:px-0">
        {   <section className="profile_banner flex  container py-16 mx-auto">
                <div className="profile_banner_head content-center	 md:flex items-center columns-2xs justify-around	align-middle ">
                        <img src={profile_img} className="profile_logo md:w-1/2 md:max-w-xs rounded-full" alt="krishna" />
                        <div className="profile_banner md:w-1/2 mt-8">
                        <p className="text-[0.875rem]">
                          Front End Developer
                        </p>
                        <h2 className="font-bold text-[2.5rem] md:text-[3rem] mb-2">Krishna Chaitanya Malireddy</h2>
                        <p className="text-[1rem] text-base	 mb-10"> 

                          I hail from the serene shores of Kakinada, but my current journey has led me to Bengaluru, the city that never sleeps, where I earn a living as dedicated software developer during the day and engage in vampire-slaying adventures at night. In addition to my full-time IT career, I also enjoy travelling, Playing Sports and having intriguing discussions about the stock market.                        </p>
                            <div className="profile_buttons">
                              <a className="px-8 py-3 border border-white-500 border-solid bg-transparent hover:bg-orange-700 rounded" href={process.env.PUBLIC_URL + '/Krishna_resume.pdf'} target="_blank" rel="noopener noreferrer"> Download Resume</a>
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
                         I mainly work with div's, Styles and Scripts. Passionate about Promoting Brands through my work, weaving stories through blocks and colours, inspired by feelings, dreams and technology. My art intends to represent strong confident characters of Organizations.
                        <br /><br />
                        I work closely with talented content writers and designers as part of my Work. Together, we weave a tapestry of art one pixel at a time where their words and designs come to life through my development and deployment. It's an amalgamation of their creativity and my technical expertise, resulting in a harmonious blend of design, content, and functionality.
                        <br /> <br />
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <a href="mailto:krishna5@duck.com">Contact Me</a>

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
                    Mastering the Melody of Code
                        </h1>
                    </div>
                    <div className="profile_banner_head content-center	md:flex-row-reverse md:flex items-center columns-2xs justify-around	align-middle ">
                        <div className=" md:w-1/2  md:ml-20">
                            <p>"I am fluent in several languages, including HTML, CSS, JavaScript, Jquery, PHP and React." These languages are the fundamentals of contemporary web development, and they enable me to make interactive and user-friendly websites.
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
