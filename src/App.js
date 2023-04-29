import React from 'react';
import './App.css';
import logo from './kc-logos/kc-logos_black.svg'; // gives image path
import profile_img from './kc-logos/kc-profile.png'; // gives image path


  
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src={logo} class="logo_kc" alt="kc" />
                    </div>
                    <li><a href="#courses">Courses</a></li>
                </ul>
            </nav>
  
            <section class="profile_banne flex">
                <div class="profile_banner_head content-center	flex items-center justify-center align-middle ">
                        <img src={profile_img} class="profile_logo  max-w-xs rounded-full" alt="krishna" />
                        <div class="profile_banner">
                        <p class="text-small">
                          Front End Developer
                        </p>
                        <h2 className="text-xl font-bold ">Krishna Chaitanya Malireddy</h2>
                        <p>                            JavaScript is the world most popular 
                            lightweight, interpreted compiled 
                            programming language. It is also 
                            known as scripting  language for
                            web pages. It is well-known for 
                            the development of web page many 
                            non-browser environments also use
                            it. JavaScript can be used for 
                            Client-side developments as well 
                            as Server-side developments.</p>
                            <div class="profile_buttons">
                              <button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Download Resume</button>
                            </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            JavaScript Tutorial
                        </h1>
                        <p class="text-small">
                            JavaScript is the world most popular 
                            lightweight, interpreted compiled 
                            programming language. It is also 
                            known as scripting  language for
                            web pages. It is well-known for 
                            the development of web page many 
                            non-browser environments also use
                            it. JavaScript can be used for 
                            Client-side developments as well 
                            as Server-side developments.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Java Programming Language
                        </h1>
                        <p class="text-small">
                            When compared with C++, Java codes 
                            are generally more maintainable 
                            because Java does not allow many 
                            things which may lead to 
                            bad/inefficient programming if used 
                            incorrectly. For example, 
                            non-primitives are always references
                            in Java. So we cannot pass large
                            objects (like we can do in C++) to 
                            functions, we always pass references 
                            in Java. One more example, since there
                            are no pointers, bad memory access 
                            is also not possible. When compared 
                            with Python, Java kind of fits between
                            C++ and Python. The programs are written
                            in Java typically run faster than 
                            corresponding Python programs and slower 
                            than C++. Like C++, Java does static 
                            type checking, but Python does not.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            What is Machine Learning?
                        </h1>
                        <p class="text-small">
                            Machine Learning is the field of study 
                            that gives computers the capability to 
                            learn without being explicitly 
                            programmed. ML is one of the most exciting
                            technologies that one would have ever 
                            come across. As it is evident from the 
                            name, it gives the computer that makes 
                            it more similar to humans: The ability 
                            to learn. Machine learning is actively 
                            being used today, perhaps in many more 
                            places than one would expect.
                        </p>
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
