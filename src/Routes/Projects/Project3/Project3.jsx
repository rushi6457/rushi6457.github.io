import React from 'react';
import "./Project3.css";
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
                <img src={naturebasket} alt="" className="image" />
            </div>
            <div className="info-container">
                <h1 className='project-heading'>Nature Basket.com</h1>
                <p className='project-description'>Nature's Basket is an online supermarket and premium grocery store offers the best online food as well as international grocery shopping experience in India.</p>
                <h4 className='tech-stack-head'>Tech Stack</h4>
                 <Flex justifyContent='space-evenly' className='tech-stack-info'>
                            <Image className='stack-images' src={html}></Image>
                            <Image className='stack-images' src={css}></Image>
                            <Image className='stack-images' src={js}></Image>
                            <Image className='stack-images' src={swiper}></Image>
                            <Image className='stack-images' src={json}></Image>
                </Flex>
                <div>
                        <h3 className='responsibilities-head'>Responsibilities:</h3>
                        <p className='respon-text'>This was a group project created by total 5 members. My responsibility was to create the footer as well as the some portions of the landing page of the website. </p> 
                </div>
                <Flex className='demo-button'>
                    <a href="https://jazzy-cupcake-d4c618.netlify.app" target={'_blank'}>
                    <button className='live-demo-button'>LIVE DEMO</button></a> 
                    <a href="https://github.com/atalkrpandey/resolute-heat-3745/tree/main/Nature%20Basket" target={'_blank'}>
                    <button className='github-link-button'>GITHUB Link</button></a>
                </Flex>
            </div>
        </div>
    );
}

export default Project1;
