import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Navbar from './Components/Navbar';
import HeroImage from './Components/HeroImage';
import Skills from './Routes/Skills';
import { useEffect, useState } from 'react';
import GitCalender from './Routes/GitCalender'
import Project1 from './Routes/Projects1';
import Contacts1 from './Routes/Contact1';
import Project from './Routes/Projects/Project';
import Footer from './Routes/Footer';
import Coding from './Routes/Coding';
import {Animated} from "react-animated-css";
function App() {

  let [loading,setLoading] = useState(false)
 

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },3000)
  },[])

      
    return (
         
      <div className='app' >

        {loading ? 
            // <div className='App-logo'><h1 class="plane"><span>R</span>USHIKESH</h1></div>
            <span className='flex'>
            
            <Animated  animationIn="zoomInLeft" animationOut="zoomOutUp" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                <h1 className='fade'>RUSHI</h1>
            </Animated>

             <Animated  animationIn="zoomInRight" animationOut="rotateOutUpLeft"animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                <h1 className='fade2'>KESH</h1>
            </Animated>
            </span>
             :
          <>
          <Navbar/>
         <Home/>
        <About/>
        <Skills/>
        <GitCalender/>
        <Coding/>
        <Project/>
        {/* <Project1/> */}
        <Contacts1/>
        {/* <Footer/> */}
         {/* <Project/>  */}
       {/* <Contact/>  */}
       </>
      }
     

      </div>
    
  );
  
}

export default App;
