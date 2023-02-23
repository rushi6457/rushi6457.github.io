import { Flex } from "@chakra-ui/react";
import {ImMobile2} from "react-icons/im";
import {VscGithub} from "react-icons/vsc";
import {SiLinkedin} from "react-icons/si";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {TfiEmail} from "react-icons/tfi";
import {TfiLocationPin} from "react-icons/tfi";
import Footer from './Footer';
import "../Styles/Contacts1.css"
import { Alert } from "react-bootstrap";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Contacts1 = () =>{

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState({
      user_name:"",
      user_email:"",
      message:''
    })
    const [message,setMessage] = useState('')

    const form = useRef();
  const sendEmail = (e) => {
        setLoading(true)
    e.preventDefault();
    console.log(name,email,message);
     emailjs.sendForm('service_yflma3m', 'template_mxsh6ri',  form.current, 'zYKXfdbRCb8WRJeN0').then(
      (result) => {
        console.log(result.text)
        toast.success('Message Sent Successfully',toastOptions)
      },
      (error) => {
        console.log(error.text)
        toast.error('Ooops, something went wrong',toastOptions)
      },
    )
    e.target.reset()
  }
  //   emailjs.sendForm("service_yflma3m","template_mxsh6ri", form.current, "zYKXfdbRCb8WRJeN0")
  //     .then((result) => {
  //         console.log(result.text);
  //         setLoading(false)
  //         alert("Email sent successfully")
  //     }, (error) => {
  //         console.log(error.text);
  //       return  alert("Something went wrong")
  //     });
  // };

   const toastOptions = {
           position:'bottom-left',
                autoClose:8000,
                pauseOnHover:true,
                draggable:true,
                theme:'dark'
    }
  
  // const handleChange = (e) =>{
  //     const {name,value} = e.target;
  //     console.log(name,value);
  //     setUser({
  //       ...user,
  //       [name]:value
  //     })
  // }
 
  // const onsubmit = (e) =>{
  //   e.preventDefault()
   
    // if(user.user_name !== '' && user.user_email !== '' && user.message !== '' ){
    //      toast.success("Message send successfully",toastOptions)
    // }
    // else{
    //    toast.error("Please fill all input fields",toastOptions)
    // }
  // }


    return (
        <div id="contacts" data-aos="fade-up">
        <h1 className="contacts-heading">Contacts</h1>
        <div className="contacts-main" >
            <div className="form">
                <h2 className="query-text">Have any query?</h2>
                <p className="query-text" >Send me your queries here</p>
                <form className="form-inner"  ref={form} onSubmit={sendEmail}>
                   <input 
                     type="text" 
                    name="name" 
                    onChange={({target})=>setName(target.value)} 
                    placeholder="Enter Name" 
                    className="input" 
                    />
                     <br />
                    <input 
                    type="email" 
                    name="email"
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
               <ToastContainer/>       
            </div>
            <div className="icons-div">
                <h2 className="follow-text">Follow & connect with me</h2>
                <div className="social-contacts">
                    <Flex className="icons-details"><ImMobile2 className="social-icons"/><a>+91&nbsp;&nbsp;7709499930</a></Flex>

                    <Flex className="icons-details"><VscGithub className="social-icons"/><a href="https://github.com/rushi6457" target={'_blank'}>Github profile</a></Flex>

                    <Flex className="icons-details"><SiLinkedin className="social-icons"/><a href='https://www.linkedin.com/in/rushikesh-patil-4a66b8236' target={'_blank'}>Linkedin profile</a></Flex>

                    <Flex className="icons-details"><TfiEmail className="social-icons"/><a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">rushiypatil@gmail.com</a></Flex>

                      <Flex className="icons-details" ><TfiLocationPin className="social-icons"/><p href="" target="_blank" rel="noopener noreferrer">Chalisgaon, Maharashtra</p></Flex>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Contacts1;