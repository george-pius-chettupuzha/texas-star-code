import React, { useState } from 'react';
import Image from "../../assets/Assets";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";



function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>

      <div className="nav--logo">
        <Link to="/"><img src={Image.logo} alt={"Texas Star Logo"}></img></Link>
      </div>

      <ul className={toggleMenu? "nav--links-mobile" : "nav--links"} onClick={() => setToggleMenu(false)}>
        <li><NavLink className={"link"} to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink className={"link"} to="/About" activeClassName="active">About</NavLink></li>
        <li><NavLink className={"link"} to="/Services" activeClassName="active">Services</NavLink></li>
        <li><NavLink className={"link"} to="/Contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink className={"link"} to="/Career" activeClassName="active">Career</NavLink></li>
        <li><a className={"btn"} href="https://www.google.com/" target="_blank">Client Portal</a></li>
      </ul>

     

      <button className='mobile-menu-icon' onClick={() => setToggleMenu(!toggleMenu)}>
        {toggleMenu? <FaTimes /> : <FaBars />}
      </button>

    </nav>


  )
}

export default Navbar