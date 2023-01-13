import React from 'react';
import "./Project5.css";
import gearbest from "./assets/gearbest-img.png";
import firstpost from "./assets/firstpost-img.png";
import naturebasket from "./assets/naturebasket-img.png"
import {AiOutlineTags} from "react-icons/ai"
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react"
import js from "./assets/js.png"
import css from "./assets/css.png"
import react from "./assets/react.png"
import json from "./assets/json.png"
import swiper from "./assets/swiper.png"
import html from "./assets/html.jpg"
import chakra from "./assets/chakra.jpg"
import gitproject from "./assets/gitproject.png"
import ipl from "./assets/ipl.png"
import { useState } from 'react';

const Project1 = () => {
    return (
        <div className='project1' data-aos="fade-up">
            <div className="image-container">
                <img src={ipl} alt="" className="image" />
            </div>
            <div className="info-container">
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
                    <button className='live-demo-button'>LIVE DEMO</button></a> 
                    <a href="https://github.com/rushi6457/ticket-booking-system" target={'_blank'}>
                    <button className='github-link-button'>GITHUB Link</button></a>
                </Flex>
            </div>
        </div>
    );
}

export default Project1;
