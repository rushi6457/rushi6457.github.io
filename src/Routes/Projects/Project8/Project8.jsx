import React from 'react';
import "./Project8.css";
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
import ipl from "./assets/ipl.png";
import ts from "./assets/ts.png"
import weather from "./assets/weather.png"
import { useState } from 'react';

const Project1 = () => {
    return (
        <div className='project1' data-aos="fade-up">
            <div className="image-container">
                <img src={weather} alt="" className="image" />
            </div>
            <div className="info-container">
                <h1 className='project-heading'>Weather App</h1>
                <p className='project-description'>This is the weather app made using typescript and chakra-ui, user can get 4 hourly weather using geolocation as well as user can also search weather of any place</p>
                <h4 className='tech-stack-head'>Tech Stack</h4>
                 <Flex justifyContent='space-evenly' className='tech-stack-info'>
                            <Image className='stack-images' src={ts}></Image>
                            <Image className='stack-images' src={react}></Image>
                            <Image className='stack-images' src={css}></Image>
                            <Image className='stack-images' src={chakra}></Image>
                </Flex>
                <div>
                        <h3 className='responsibilities-head'>Responsibilities:</h3>
                        <p className='respon-text'>As this was a individual project so, I was resonsible for creating whole UI also and all the functionalities</p> 
                </div>
                <Flex className='demo-button'>
                    <a href="https://weather-app-lilac-ten-58.vercel.app/" target={'_blank'}>
                    <button className='live-demo-button'>LIVE DEMO</button></a> 
                    <a href="https://github.com/rushi6457/WeatherApp" target={'_blank'}>
                    <button className='github-link-button'>GITHUB Link</button></a>
                </Flex>
            </div>
        </div>
    );
}

export default Project1;
