import React from 'react';
import "./Project7.css";
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react"
import js from "./assets/js.png"
import metric from "./assets/metric.png"
import css from "./assets/css.png"
import redux from "./assets/redux.png"
import react from "./assets/react.png"
import chakra from "./assets/chakra.jpg"
import express from "./assets/express.png"
import mongo from "./assets/mongo.jpeg"
import hubpoint from "./assets/hubpoint.png"

const Project1 = () => {
    return (
        <div className='project1' data-aos="fade-up">
            <div className="image-container">
                <img src={hubpoint} alt="" className="image" />
            </div>
            <div className="info-container">
                <h1 className='project-heading'>Hub-point.com</h1>
                <p className='project-description'>Hub-point Customer Releationship Management provider platform which provides tons of services like marketing softwares for business CRM softwares to know more about customers etc.</p>
                <h4 className='tech-stack-head'>Tech Stack</h4>
                 <Flex justifyContent='space-evenly' className='tech-stack-info'>
                            <Image className='stack-images' src={react}></Image>
                            <Image className='stack-images' src={js}></Image>
                            <Image className='stack-images' src={css}></Image>
                            <Image className='stack-images' src={redux}></Image>
                            <Image className='stack-images' src={chakra}></Image>
                            <Image className='stack-images' src={express}></Image>
                            <Image className='stack-images' src={mongo}></Image>
                </Flex>
                <div>
                        <h3 className='responsibilities-head'>Responsibilities:</h3>
                        <p className='respon-text'>This was a group project created by total 5 members. My responsibility was to create the landing page, singup and signin page for this website.</p> 
                </div>
                <Flex className='demo-button'>
                    <a href="https://hubpoint-aman-109.vercel.app/" target={'_blank'}>
                    <button className='live-demo-button'>LIVE DEMO</button></a> 
                    <a href="https://github.com/aman-109/axiomatic-spring-6378" target={'_blank'}>
                    <button className='github-link-button'>GITHUB Link</button></a>
                </Flex>
            </div>
        </div>
    );
}

export default Project1;
