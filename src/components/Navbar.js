import "./Navbarstyle.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { FaBars, FaTimes} from "react-icons/fa";



const Navbar = () => {

const[click,setclick] =   useState(false);
const handleClick = () => {setclick(!click)}

  return (
    <div className="header">
        <Link to="/"> 
        <h1 style={{color : " #2C5487"}}>My Portfolio</h1>
         </Link>
         <ul className={click ? "nav-menu active" : "nav-menu"} >
            <li><Link to= "./">Home</Link></li>
            <li><Link to= "./Project">Project</Link></li>
            <li><Link to= "./Contact">Contact</Link></li>
            <li><Link to= "./About">About</Link></li>


         </ul>
         <div className="hamburgur" onClick={handleClick}>
          {click ? (
          <FaTimes size={20} style={{color:" #2C5487"}}/>)
           : (<FaBars size={20} style={{color:" #2C5487"}}/>)}
            
            </div>
         {/* <FaTimes size={20} style={{color:" #2C5487"}}/>
          <FaBars size={20} style={{color:" #2C5487"}}/> */}
        
         
      
    </div>
  )
}

export default Navbar


