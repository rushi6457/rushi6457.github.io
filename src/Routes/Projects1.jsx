import React from 'react';
import gearbest from "../assets/gearbest-img.png"
import firstpost from "../assets/firstpost-img.png";
import naturebasket from "../assets/naturebasket-img.png"
import "../Styles/Project1.css"
import {AiOutlineTags} from "react-icons/ai"
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react"
import js from "../assets/js.png"
import css from "../assets/css.png"
import react from "../assets/react.png"
import json from "../assets/json.png"
import swiper from "../assets/swiper.png"
import html from "../assets/html.jpg"
import chakra from "../assets/chakra.jpg"
import gitproject from "../assets/gitproject.png"
import ipl from "../assets/ipl.png"
import { useState } from 'react';
const Project1 = () =>{
     const [show ,setShow] = useState(false);
    return (
        <div className="main-projects" id='projects' data-aos="fade-up">
                <h1 className='project-heading-main'>My Projects</h1>
                <div className='project-section'>
                 
                        <Flex className="project">
                            <div className='project-image-div'>
                                <img  className='project-image' src={gearbest}alt="" />
                            </div>
                            <div className='info-div'>
                                    <h1 className='project-heading'>Gearbest.com </h1>
                                    <p className='project-description'>Gearbest is the E-commerce platform where people can buy wide variety of products from mobile-phones to bicycles at affordable price.</p>
                                         <h4 className='tech-stack-head'>Tech Stack</h4>
                                <Flex justifyContent='space-evenly' className='tech-stack-info'>
                                        <Image className='stack-images' src={react}></Image>
                                        <Image className='stack-images' src={js}></Image>
                                        <Image className='stack-images' src={css}></Image>
                                        <Image className='stack-images' src={swiper}></Image>
                                        <Image className='stack-images' src={json}></Image>
                                        <Image className='stack-images' src={chakra}></Image>
                                </Flex>
                                 <div>
                                        <h3 className='responsibilities-head'>Responsibilities:</h3>
                                        <p className='respon-text'>As this was a individual project so, I was resonsible for creating whole UI also i have done some functionalities like signup,signin, add to cart functionality. This project was created within 4 days</p> 
                                </div>
                                   <Flex className='demo-button'>
                                            <a href="https://gearbest-project-eta.vercel.app/" target={'_blank'}>
                                            <button className='live-demo-button'>LIVE DEMO</button>
                                            </a> 
                                            <a href="https://github.com/rushi6457/prime-move-3249/tree/main/gearbest.com" target={'_blank'}>
                                            <button className='github-link-button'>GITHUB Link</button>
                                            </a>
                                 </Flex>
                            </div>
                        </Flex>
             

                   <Flex className="project">
                            <div className='project-image-div'>
                                <img className='project-image' src={firstpost}alt="" />
                            </div>
                            <div className='info-div'>
                                     <h1 className='project-heading'>Firstpost.com </h1>
                                    <p className='project-description'>Firstpost is an indian news media website. Users can find world news as well as the regional news live also, it is very easy to access for those people who are not much aware about the internet browsing.</p>
                                    <h4 className='tech-stack-head'>Tech Stack</h4>
                                   <Flex justifyContent='space-evenly' className='tech-stack-info'>
                                            <Image className='stack-images' src={js}></Image>
                                            <Image className='stack-images' src={css}></Image>
                                            <Image className='stack-images' src={html}></Image>
                                    </Flex>
                                    <div>
                                        <h3 className='responsibilities-head'>Responsibilities:</h3>
                                        <p  className='respon-text'>This was a group project created by total 3 members. My responsibility was to create the navbar of the website with the toggling functionality to side-bar as well as search-bar. </p> 
                                    </div>
                                    <Flex className='demo-button'>
                                            <a href="https://heroic-cucurucho-c5bc21.netlify.app/" target={'_blank'}>
                                                <button className='live-demo-button'>LIVE DEMO</button>
                                                </a>
                                            <a href="https://github.com/raje2/TheTeam_Monster_FirstPost" target={'_blank'}>
                                                <button className='github-link-button'>GITHUB Link</button>
                                            </a>
                                    </Flex>
                            </div>
                        </Flex>

                    <Flex className="project">
                            <div className='project-image-div'>
                                <img className='project-image' src={naturebasket}alt="" />
                            </div>
                            <div className='info-div'>
                                     <h1 className='project-heading'>Nature Basket.com </h1>
                                     <p className='project-description'>Nature's Basket is an online supermarket and premium grocery store offers the best online food as well as international grocery shopping experience in India.</p>
                                    <h4 className='tech-stack-head'>Tech Stack</h4>
                                 <Flex justifyContent='space-evenly' className='tech-stack-info'>
                                            <Image className='stack-images' src={html}></Image>
                                            <Image className='stack-images' src={js}></Image>
                                            <Image className='stack-images' src={css}></Image>
                                            <Image className='stack-images' src={swiper}></Image>
                                            <Image className='stack-images' src={json}></Image>
                                </Flex>
                                <div>
                                    <h3 className='responsibilities-head'>Responsibilities:</h3>
                                    <p className='respon-text'>This was a group project created by total 5 members. My responsibility was to create the footer as well as the some portions of the landing page of the website. </p> 
                                </div>
                                 <Flex className='demo-button'>
                                    <a href="https://jazzy-cupcake-d4c618.netlify.app/" target={'_blank'}>
                                        <button className='live-demo-button'>LIVE DEMO</button>
                                    </a>
                                    <a href="https://github.com/atalkrpandey/resolute-heat-3745/tree/main/Nature%20Basket" target={'_blank'}>
                                        <button className='github-link-button'>GITHUB Link</button>
                                    </a>
                                    </Flex>
                            </div>
                        </Flex>
                      {/* Conditional */}
                    <div  className={show === true ? 'showProjects' : "hideProjects"}>
                    <div  className='project-section-show' width='95%'>
                         <Flex className="project">
                            <div className='project-image-div'>
                                <img className='project-image' src={gitproject}alt="" />
                            </div>
                            <div className='info-div'>
                                     <h1 className='project-heading'>Github profile search </h1>
                                    <p className='project-description'>This is the simple github username search mini project which was made individually by me. Here anyone can search profiles of github users.</p>
                                    <h4 className='tech-stack-head'>Tech Stack</h4>
                                   <Flex justifyContent='space-evenly' className='tech-stack-info'>
                                            <Image className='stack-images' src={js}></Image>
                                            <Image className='stack-images' src={css}></Image>
                                            <Image className='stack-images' src={react}></Image>
                                            <Image className='stack-images' src={chakra}></Image>
                                    </Flex>
                                    <div>
                                        <h3 className='responsibilities-head'>Responsibilities:</h3>
                                        <p  className='respon-text'>This was a mini project so whole project was created by me where i have used Github API for search functionality and also used Chakra UI for UI. </p> 
                                    </div>
                                    <Flex className='demo-button'>
                                            <a href="https://velvety-blini-4aab7f.netlify.app/" target={'_blank'}>
                                                <button className='live-demo-button'>LIVE DEMO</button>
                                                </a>
                                            <a href="https://github.com/rushi6457/github-search" target={'_blank'}>
                                                <button className='github-link-button'>GITHUB Link</button>
                                            </a>
                                    </Flex>
                            </div>
                        </Flex>

                    <Flex className="project">
                            <div className='project-image-div'>
                                <img className='project-image' src={ipl}alt="" />
                            </div>
                            <div className='info-div'>
                                     <h1 className='project-heading'>IPL ticket booking system</h1>
                                     <p className='project-description'>In this project I have applied my learning about Low Level System design. This project is about booking the tickets for different levels of audience like VVIP VIP and general.</p>
                                    <h4 className='tech-stack-head'>Tech Stack</h4>
                                 <Flex justifyContent='space-evenly' className='tech-stack-info'>
                                            <Image className='stack-images' src={html}></Image>
                                            <Image className='stack-images' src={css}></Image>
                                            <Image className='stack-images' src={js}></Image>
                                </Flex>
                                <div>
                                    <h3 className='responsibilities-head'>Responsibilities:</h3>
                                    <p className='respon-text'>This was a individual project so, I was resonsible for implementing functionality to creating UI for the project.</p> 
                                </div>
                                 <Flex className='demo-button'>
                                    <a href="https://cosmic-gingersnap-07f444.netlify.app" target={'_blank'}>
                                        <button className='live-demo-button'>LIVE DEMO</button>
                                    </a>
                                    <a href="https://github.com/rushi6457/ticket-booking-system" target={'_blank'}>
                                        <button className='github-link-button'>GITHUB Link</button>
                                    </a>
                                    </Flex>
                            </div>
                        </Flex>
                    </div>
                </div>
                   <div className='show-button-div'>
                             <p className='show-button' onClick={()=>setShow(!show)}>{show ? 'Show Less' : "Show More"}</p> 
                        </div>
                </div>
        </div>
    )
}
export default Project1