import "./HeroImage.css"
import asset2 from "../assets/asset2.jpg"
import React from 'react';
import { Link } from "react-router-dom";
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import About from "../Routes/About";
import GithubStats from "./GithubStats";

const HeroImage = () => {
    return (
        <div className="hero">
            {/* <div className="mask">
                <img className="into-img" src={asset2} alt=''/>
            </div> */}
            {/* <div className="content">
            <p className="helloText">Hello,my name is</p>
            {/* <Divider orientation='horizontal' color='white' variant={'1px solid white'} /> */}
            {/* <h3 className="nameheading">Rushikesh Patil </h3> */}
 
         {/* <Text className="designation-text">FULL STACK WEB DEVELOPER</Text> */}

            {/* <div className="buttons"> */}
                {/* <Link to='/projects'  className='btn'>Projects</Link> */}
                  {/* <Link to='/conatct' className='btn-light'>Contacts</Link> */}
            {/* </div> */}
              {/* } */}
            {/* </div> */}
        </div>
    );
}

export default HeroImage;
