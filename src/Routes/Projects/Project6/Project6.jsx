import React from 'react';
import "./Project6.css";
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react"
import js from "./assets/js.png"
import metric from "./assets/metric.png"
import css from "./assets/css.png"
import redux from "./assets/redux.png"
import react from "./assets/react.png"
import chakra from "./assets/chakra.jpg"
import express from "./assets/express.png"
import mongo from "./assets/mongo.jpeg"

const Project1 = () => {
    return (
        <div className='project1' data-aos="fade-up">
            <div className="image-container">
                <img src={metric} alt="" className="image" />
            </div>
            <div className="info-container">
                <h1 className='project-heading'>Five-metric.com</h1>
                <p className='project-description'>Five-metric is an time and activity management application where user can assign their daily tasks and activities and assign the time to each task.</p>
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
                        <p className='respon-text'>This was a group project created by total 5 members. My responsibility was to create the pricing page with functionality as well as I have created the sidebar for user dashboard also made navbar,footer, landing page responsive and did routing for whole project.</p> 
                </div>
                <Flex className='demo-button'>
                    <a href="https://five-metric.vercel.app/" target={'_blank'}>
                    <button className='live-demo-button'>LIVE DEMO</button></a> 
                    <a href="https://github.com/skshm2000/Five-Metric-Time-Management-Webapp" target={'_blank'}>
                    <button className='github-link-button'>GITHUB Link</button></a>
                </Flex>
            </div>
        </div>
    );
}

export default Project1;
