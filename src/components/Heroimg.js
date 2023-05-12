import "./Heroimg.css";
import Dp from "../components/pictures/Dp.jpg";

import React from 'react'

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img"
            src={Dp} alt="My Image"/>
            <div className="content">
              <p>Hi! This is Aditya Narayan</p>
              <h1>Front End Developer</h1>


            </div>

        </div>

      
    </div>
  )
}

export default Heroimg
