import "./Heroimg.css";
import Dp from "../components/pictures/Dp.jpg";

import React from 'react'

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img"
            src={Dp} alt="My Image"/>

        </div>

      
    </div>
  )
}

export default Heroimg
