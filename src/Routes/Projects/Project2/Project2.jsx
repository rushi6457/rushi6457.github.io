import React from 'react';
import "./Project2.css";
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
                <img src={firstpost} alt="" className="image" />
            </div>
            <div className="info-container">
                <h1 className='project-heading'>Firstpost.com</h1>
                <p className='project-description'>Firstpost is an indian news media website. Users can find world news as well as the regional news live also, it is very easy to access for those people who are not much aware about the internet browsing.</p>
                <h4 className='tech-stack-head'>Tech Stack</h4>
                 <Flex justifyContent='space-evenly' className='tech-stack-info'>
                            <Image className='stack-images' src={html}></Image>
                            <Image className='stack-images' src={js}></Image>
                            <Image className='stack-images' src={css}></Image>
                </Flex>
                <div>
                        <h3 className='responsibilities-head'>Responsibilities:</h3>
                        <p className='respon-text'>This was a group project created by total 3 members. My responsibility was to create the navbar of the website with the toggling functionality to side-bar as well as search-bar.</p> 
                </div>
                <Flex className='demo-button'>
                    <a href="https://heroic-cucurucho-c5bc21.netlify.app/" target={'_blank'}>
                    <button className='live-demo-button'>LIVE DEMO</button></a> 
                    <a href="https://github.com/raje2/TheTeam_Monster_FirstPost" target={'_blank'}>
                    <button className='github-link-button'>GITHUB Link</button></a>
                </Flex>
            </div>
        </div>
    );
}

export default Project1;
