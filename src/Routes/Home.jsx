import React, { useState } from 'react';
// import { Link, Route } from 'react-router-dom';
import { Link } from 'react-scroll';
import GithubStats from '../Components/GithubStats';
import HeroImage from '../Components/HeroImage';
import {AiOutlineDownload} from 'react-icons/ai';
import Navbar from '../Components/Navbar';
import About from './About';
import styles from "../Styles/Home.module.css"
import asset2 from "../assets/asset2.jpg"
const Home = () => {

   const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Rushikesh-Patil-Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Rushikesh-Patil-Resume.pdf";
        alink.click();
      });
    });
    window.open("https://drive.google.com/file/d/1zfgAqNIhGAsOxJNGAeF6KY0cxF45find/view?usp=sharing", '_blank');
    // changeDisplay("none")
  };

    return (
    <div data-aos="fade-up"  id='home' className='homemain'>
         <div className={styles.mask}>
                <img className={styles.intoImg} src={asset2} alt=''/>
        </div>
        <div className={styles.hero}>
        
        <div className={styles.content}>
            <p className={styles.helloText}>Hello,my name is</p>
         
            <h3 className={styles.nameheading}>Rushikesh Patil </h3>
 
         <p className={styles.designationText}>FULL STACK WEB DEVELOPER</p>

            <div className="buttons">
               <Link className={styles.btn} to='projects'spy={true} smooth={true} offset={100} duration={1000}>
                <button>Projects</button>
               </Link>
               {/* <a className={styles.btnLight} download={'https://drive.google.com/file/d/1zfgAqNIhGAsOxJNGAeF6KY0cxF45find/view?usp=sharing'} target="_blank" > */}
               <Link className={styles.btnLight} spy={true} smooth={true} offset={100} duration={1000}>
              
                <button  onClick={onButtonClick}>Resume</button>
            
                {/* </a> */}
               </Link>
                {/* <Link to='/projects'  className={styles.btn}>Projects</Link>
                  <Link to='/conatct' className={styles.btnLight}>Contacts</Link> */}
            </div>
             
        </div>
        </div>
    </div>
    );
    
}

export default Home;
