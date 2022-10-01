//  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 import React from "react"
 import Header from "./components/Header/Header"
 import Intro from "./components/Intro/Intro"
 import Sobremim from "./components/Sobremim/Sobremim"
 import Projects from "./components/Projects/Projects"
 import Skil from "./components/Skills/Skil"
 import './App.css'
import { Footer } from "./components/Footer/Footer"


 export default ()=>{
    return(
      <>
        <Header/>
        <Intro/>
        <Sobremim/>
        <Projects/>
        <Skil/>
        <Footer/>
      </>
      
      
    )
 }
