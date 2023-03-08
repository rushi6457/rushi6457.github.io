
import myimage from "../assets/myimage.jpg";
import newpic from "../assets/newpic.png";
import React from 'react';
import pic2 from "../assets/pic2.png";

import "../Styles/About.css"
const About = () => {
    return (
       <div 
       data-aos="fade-up"
       className='about-section' id='about'>
            <div className='text-about'>
                <h1 className='aboutHeading'>About Me</h1>
                {/* <div className='details'> */}
                <p className="para">Hey, I'm Rushikesh Patil Full-Stack Web Developer</p>
                <br />
                <p className="details-full">A passionate Full-stack web developer with strong technical as well as communication skills, the goal-oriented programmer who can write efficient and clean code using the MERN stack. In the past few months, I have worked on JavaScript, Typescript, Redux, and frameworks like Node JS. I have hands-on experience with front-end libraries like React-Js, NextJs and backend technologies such as MongoDB, and express JS. Apart from that, I'm a B-tech graduate in Mechanical from D.Y.Patil Institute of Engineering, Pune</p>
                {/* </div> */}
            </div>
            <div>
                <img src={pic2} className='profileImage'/>
            </div>
       </div>
    );
}

export default About;
