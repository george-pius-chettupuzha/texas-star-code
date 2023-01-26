import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterLogo from '../../assets/footer--logo.png'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import Backtotop from './Backtotop';

function Footer() {

  

  return (
    <div className="footer--container">
      <div className="footer--wrapper">

        <div className="footer--content">
          <img src={FooterLogo} alt="Footer Logo" />
          <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div className="footer--navigation">

          <div className="footer--sm">
            <a href="https://www.google.com/" target="_blank"><FaFacebookSquare /></a>
            <a href="https://www.google.com/" target="_blank"><FaInstagram /></a>
            <a href="https://www.google.com/" target="_blank"><FaTwitter /></a>
          </div>

          <div className="footer--links">
            <ul>
              <li className="nav--link"><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li className="nav--link"><NavLink to="/About" activeClassName="active">About</NavLink></li>
              <li className="nav--link"><NavLink to="/Services" activeClassName="active">Services</NavLink></li>
              <li className="nav--link"><NavLink to="/Contact" activeClassName="active">Contact</NavLink></li>
              <li className="nav--link"><NavLink to="/Career" activeClassName="active">Career</NavLink></li>
            </ul>

            <a className={"btn"} href="https://www.google.com/" target="_blank">Client Potal</a>
          </div>
        </div>


      </div>

      <div className="footer--copy margin--wrapper">
        <p>Copyright © 2020 Texas Star HMES Supplies Inc., All rights reserved.</p>
      </div>

      <div className="footer--scroll">
       <Backtotop />
      </div>
    </div>
  )
}

export default Footer