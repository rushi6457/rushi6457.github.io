import { Flex } from "@chakra-ui/react";
import {ImMobile2} from "react-icons/im";
import {VscGithub} from "react-icons/vsc";
import {SiLinkedin} from "react-icons/si";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {TfiEmail} from "react-icons/tfi";
import Footer from './Footer';
import "../Styles/Contacts1.css"
import { Alert } from "react-bootstrap";

const Contacts1 = () =>{

    const [show,setShow] = useState(true)
    const [auth,setAuth] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState('')

    const form = useRef();
      const sendEmail = (e) => {
        setLoading(true)
    e.preventDefault();

    emailjs.sendForm("service_yflma3m","template_mxsh6ri", form.current, "zYKXfdbRCb8WRJeN0")
      .then((result) => {
          console.log(result.text);
          setLoading(false)
          alert("Email sent successfully")
      }, (error) => {
          console.log(error.text);
        return  alert("Something went wrong")
      });
  };

 
  const onsubmit = (e) =>{
    e.preventDefault()
    if(name !== '' && email !== '' && message !== '' ){
        return alert("Message send successfully")
    }
    else{
      return alert("Please fill all input fields")
    }
  }


    return (
        <div id="contacts" data-aos="fade-up">
        <h1 className="contacts-heading">Contacts</h1>
        <div className="contacts-main" >
            <div className="form">
                <h2 className="query-text">Have any query?</h2>
                <p className="query-text" >Send me your queries here</p>
                <form action="" className="form-inner"  ref={form} onSubmit={sendEmail}>
                   <input 
                     type="text" 
                    name="user_name" 
                    onChange={({target})=>setName(target.value)} 
                    placeholder="Enter Name" 
                    className="input" 
                    />
                     <br />
                    <input 
                    type="email" 
                    name="user_email"
                    onChange={({target})=>setName(target.value)} 
                    placeholder="Enter Email" 
                    className="input" 
                  />
                     <br />
                    <textarea 
                    name="message" 
                    placeholder="Enter your query" 
                    onChange={({target})=>setMessage(target.value)} 
                    className="text-area" 
                    id="" 
                    cols="20" 
                    rows="5"></textarea>
                    {/* <input className="input-button"  type="submit" value="Send"  /> */}
                    <button 
                    onClick={onsubmit}
                     value="Send"
                    className="input-button" 
                    type="submit">Submit</button>
                </form>
                    
            </div>
            <div className="icons-div">
                <h2 className="follow-text">Follow & connect with me</h2>
                <div className="social-contacts">
                    <Flex className="icons-details"><ImMobile2 className="social-icons"/><a>+91&nbsp;&nbsp;7709499930</a></Flex>

                    <Flex className="icons-details"><VscGithub className="social-icons"/><a href="https://github.com/rushi6457" target={'_blank'}>Github profile</a></Flex>

                    <Flex className="icons-details"><SiLinkedin className="social-icons"/><a href='https://www.linkedin.com/in/rushikesh-patil-4a66b8236' target={'_blank'}>Linkedin profile</a></Flex>

                    <Flex className="icons-details"><TfiEmail className="social-icons"/><a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">rushiypatil@gmail.com</a></Flex>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Contacts1;