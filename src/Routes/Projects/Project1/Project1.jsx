import React from 'react';
import "./Project1.css";
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
                <img src={gearbest} alt="" className="image" />
            </div>
            <div className="info-container">
                <h1 className='project-heading'>Gearbest.com</h1>
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
                    <button className='live-demo-button'>LIVE DEMO</button></a> 
                    <a href="https://github.com/rushi6457/prime-move-3249/tree/main/gearbest.com" target={'_blank'}>
                    <button className='github-link-button'>GITHUB Link</button></a>
                </Flex>
            </div>
        </div>
    );
}

export default Project1;
