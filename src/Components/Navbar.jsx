import React, { useState } from 'react';
import { Link } from "react-scroll";
import styles from "./Navbar.module.css"
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"
import {AiOutlineDownload ,AiOutlineHome,AiOutlineFolderOpen} from "react-icons/ai"
import {FiUser} from "react-icons/fi"
import {BiWrench} from "react-icons/bi"
import {RiContactsBookLine} from "react-icons/ri"
import "./Navbar.css"
const Navbar = () => {
    
    const [click , setClick ] = useState(false)
    const [color , setColor] = useState(false)
    const handleClick = () =>setClick(!click)
    
    const changeColor = () =>{
        if(window.scrollY >= 50){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener("scroll" , changeColor)

    return (
        <div className={styles.header}>
            <div><Link  spy={true} smooth={true} offset={50} duration={1000} ctiveClass={styles.active}  to="home"  className={styles.logo}><h1><span>R</span>USHIKESH</h1></Link></div>
            <ul className={click ? "nav-menu active"  : "nav-menu"}>
            
                  <li>
                    {/* <Link to="/about" >About</Link> */}
                 <Link activeClass={styles.active} to="about" spy={true} smooth={true} offset={50} duration={1000}><FiUser className={styles.navbarIcons}/>About Me</Link>
                </li>
                    <li> 
                    {/* <Link to="/" >Home</Link> */}
                        <Link activeClass={styles.active} to="skills" spy={true} smooth={true} offset={100} duration={1000}><BiWrench className={styles.navbarIcons}/>Skills</Link>
                </li>
                  <li>
                    {/* <Link to="/projects">Projects</Link> */}
                       <Link activeClass={styles.active} to="projects" spy={true} smooth={true} offset={50} duration={1000}><AiOutlineFolderOpen className={styles.navbarIcons}/>Projects</Link>
                </li>
                  <li>
                    {/* <Link to="/contacts">Contacts</Link> */}
                        <Link activeClass={styles.active} to="contacts" spy={true} smooth={true} offset={50} duration={1000}><RiContactsBookLine className={styles.navbarIcons}/>Contact Me</Link>
                </li>
                  <li>
                    <a target={'_blank'} href='https://drive.google.com/file/d/1zfgAqNIhGAsOxJNGAeF6KY0cxF45find/view?usp=sharing'>
                        <button className={styles.resumeButton}>Resume</button>
                    </a>
                </li>
            </ul>
            <div className={styles.hamberger} onClick={handleClick}>
                {!click ? (
                     <FaBars  size={25} style ={{color:'white'}} />
                ):(

                   <FaTimes  size={25} style ={{color:'white'}}  />
                )
            }
               
            </div>
        </div>
    );
}

export default Navbar;
