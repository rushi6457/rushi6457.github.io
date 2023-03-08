import React from 'react';
import "./Project9.css";
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
import home from "./assets/home.png"
import redux from "./assets/redux.png"
import express from "./assets/express.png"
import mongo from "./assets/mongo.jpeg"
import chart from "./assets/chart.png"

const Project9 = () => {
    return (
        <div className='project1' data-aos="fade-up">
            <div className="image-container">
                <img src={home} alt="" className="image" />
            </div>
            <div className="info-container">
                <h1 className='project-heading'>Full stack E-commerce</h1>
                <p className='project-description'>This is and full stack e-commerce application with both user and admin routes. User can add products to cart and buy it, admin can add products delete,update products.Also this project has token based authetication, multi user support</p>
                <h4 className='tech-stack-head'>Tech Stack</h4>
                 <Flex justifyContent='space-evenly' className='tech-stack-info'>
                            <Image className='stack-images' src={react}></Image>
                            <Image className='stack-images' src={js}></Image>
                            <Image className='stack-images' src={css}></Image>
                            <Image className='stack-images' src={express}></Image>
                            <Image className='stack-images' src={mongo}></Image>
                            <Image className='stack-images' src={chakra}></Image>
                            <Image className='stack-images' src={chart}></Image>
                </Flex>
                <div>
                        <h3 className='responsibilities-head'>Responsibilities:</h3>
                        <p className='respon-text'>As this was a individual project so, I was resonsible for creating whole UI also this project have signup/login functionality, CRUD oprations</p> 
                </div>
                <Flex className='demo-button'>
                    <a href="https://e-com-xi.vercel.app/" target={'_blank'}>
                    <button className='live-demo-button'>LIVE DEMO</button></a> 
                    <a href="https://github.com/rushi6457/full-stack-E-com" target={'_blank'}>
                    <button className='github-link-button'>GITHUB Link</button></a>
                </Flex>
            </div>
        </div>
    );
}

export default Project9;
