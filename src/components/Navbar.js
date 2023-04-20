import "./Navbarstyle.css";
import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <div className="header">
        <Link to="/"> 
        <h1>My Portfolio</h1>
         </Link>
         <ul className="nav-menu">
            <li><Link to= "./">Home</Link></li>
            <li><Link to= "./Project">Project</Link></li>
            <li><Link to= "./Contact">Contact</Link></li>
            <li><Link to= "./About">About</Link></li>

         </ul>
         
      
    </div>
  )
}

export default Navbar


