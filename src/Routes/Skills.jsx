
import html from "../assets/html.jpg"
import css from "../assets/css.png"
import js from "../assets/js.png"
import ts from "../assets/ts.png"
import redux from "../assets/redux.png"
import react from "../assets/react.png"
import chakra from "../assets/chakra.jpg"
import bs from "../assets/bootstrap.png"
import swiper from "../assets/swiper.png"
import styles from "../Styles/Skills.module.css"
import node from "../assets/node.png"
import next from "../assets/next.png"
import express from "../assets/express.png"
import mongo from "../assets/mongo.jpeg"
import json from "../assets/json.png"
import sio from "../assets/sio.png"
import postman from "../assets/postman.png"
import GitCalender from './GitCalender';
import React, { useRef, useState } from "react";
import { Box, Flex,Grid,Heading,Image,Stack,Text } from "@chakra-ui/react"
import {AiFillHtml5} from "react-icons/ai"
const Skills = () => {
    return (

        <Stack 
        id='skills'
        data-aos="fade-up"
        className={styles.mainStack} 
        margin='auto'>
                <Heading 
                    className={styles.skillsHeading}
                    marginTop={'50px'}
                    letterSpacing={'3px'} 
                    fontSize=' 50px' 
                    as='h1' 
                    size={'xl'}>Skills
                </Heading>
                <Box 
                    data-aos="fade-up"
                    className={styles.frontEndBox}>
                    <Heading 
                        textAlign={'center'} 
                        textDecoration='underline'>FRONT-END SKILLS
                    </Heading>
                    <Grid 
                        className={styles.frontEndGrid} 
                        marginTop='5%'>  
                        <Box  
                            className={styles.box}
                            border='1px solid white' 
                            padding={'-10px'}>
                             
                             <Image 
                                width={'100%'} 
                               
                                src={html}></Image> 
                            <Text 
                                 className={styles.text}  
                                textAlign={'center'} 
                                marginTop='20px'  
                                fontSize='1.5rem'>HTML</Text>
                        </Box>
                        <Box  
                          className={styles.box}
                            border='1px solid white'>
                            <Image 
                            padding={'10%'}
                                width={'100%'} 
                               
                                src={css}></Image>
                            <Text 
                                 className={styles.text} 
                                textAlign={'center'} 
                                marginTop='20px' 
                                fontSize='1.5rem'>CSS</Text>
                        </Box>
                        <Box   className={styles.box} border='1px solid white'>
                            <Image width={'100%'}src={react}></Image>
                            <Text  className={styles.text} textAlign={'center'} marginTop='20px' fontSize='1.5rem'>React JS</Text>
                        </Box>
                        <Box   className={styles.box} border='1px solid white'>
                            <Image width={'100%'}src={js}></Image>
                            <Text  className={styles.text} textAlign={'center'} marginTop='20px' fontSize='1.5rem'>JavaScript</Text>
                        </Box>
                        <Box   className={styles.box} border='1px solid white'>
                            <Image width={'100%'}src={ts}></Image>
                            <Text  className={styles.text} textAlign={'center'} marginTop='20px' fontSize='1.5rem'>Typescript</Text>
                        </Box>
                        <Box   className={styles.box} border='1px solid white'>
                            <Image width={'100%'}src={bs}></Image>
                            <Text  className={styles.text} textAlign={'center'} marginTop='20px' fontSize='1.5rem'>Bootstrap</Text>
                        </Box>
                        <Box   className={styles.box} border='1px solid white'>
                            <Image  width={'100%'}src={redux}></Image>
                            <Text  className={styles.text} textAlign={'center'} marginTop='40px' fontSize='1.5rem'>Redux</Text>
                        </Box>
                         <Box   className={styles.box} border='1px solid white'>
                            <Image padding={'5%'} width={'100%'}  src={next}></Image>
                            <Text marginTop={'20px'} className={styles.text} textAlign={'center'}  fontSize='1.5rem'>Next Js</Text>
                        </Box>
                    </Grid>
                </Box>

                 <Box data-aos="fade-up" className={styles.backEndBox}>
                    <Heading as='h2' marginTop={'5%'}  textAlign={'center'} textDecoration='underline'>BACK-END SKILLS</Heading>
                    <Grid  className={styles.backEndGrid} marginTop='5%'>  
                        <Box   className={styles.box} border='1px solid white' >
                            <Image  width={'100%'}src={node}></Image>
                            <Text marginTop={'20px'} className={styles.text} textAlign={'center'} fontSize='1.5rem'>Node JS</Text>
                        </Box>
                        <Box   className={styles.box} border='1px solid white'>
                            <Image  width={'100%'}src={express}></Image>
                            <Text marginTop={'20px'} className={styles.text} textAlign={'center'}  fontSize='1.5rem'>Express JS</Text>
                        </Box>
                        <Box   className={styles.box} border='1px solid white'>
                            <Image width={'100%'}src={mongo}></Image>
                            <Text  className={styles.text} textAlign={'center'} marginTop='20px' fontSize='1.5rem'>MongoDb JS</Text>
                        </Box>
                        <Box   className={styles.box} border='1px solid white'>
                            <Image padding={'10px'} width={'100%'}src={postman}></Image>
                            <Text marginTop={'20px'} className={styles.text} textAlign={'center'}  fontSize='1.5rem'>Postman</Text>
                        </Box>
                        <Box   className={styles.box} border='1px solid white'>
                            <Image width={'100%'}src={json}></Image>
                            <Text  className={styles.text} textAlign={'center'} marginTop='20px' fontSize='1.5rem'>JSON</Text>
                        </Box>
                        <Box   className={styles.box} border='1px solid white'>
                            <Image  width={'100%'}src={sio}></Image>
                            <Text marginTop={'20px'} className={styles.text} textAlign={'center'}  fontSize='1.5rem'>Socket.io</Text>
                        </Box>
                      
                    </Grid>
                </Box>

        </Stack>

    
    );
}
     
export default Skills;
