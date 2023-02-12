import React from 'react';
import { NavLink } from 'react-router-dom';

//global
import Slider from '../Globals/Slider';
import Contacts from '../Globals/Contacts';
import Hero from '../Globals/Hero';

// Fa Icon
import { FaArrowRight } from "react-icons/fa";
// import styled from 'styled-components';


function Home() {
  return (
    // Home Content
    <div className="home--container">

      <section className='hero--container home--banner'>
      <Hero
      Image={require('../../assets/hero.jpg')}
      Head={"Welcome to Texas Star DME! We're Serving Your Needs"}
      Paragraph={"Hospitality without the hassle! Texas Star DME provides hospices with an easy-to-use DME management solution, maintains a high-level stock inventory, and provides exceptional customer care service. Our trained personnel assist customers with all kinds of inquiries and helps in improving the patient care"}
      CtaName={"Contact Our Representative"}
      />
      </section>
      

      {/* Home Counter */}
      <section className='counter--container'>

        <div className="counter--wrapper">

        <div className="counter--item">
          <h2>900+</h2>
          <p>Network Providers</p>
        </div>

        <div className="counter--item">
          <h2>1800+</h2>
          <p>Our Locations</p>
        </div>

        <div className="counter--item">
          <h2>1m+</h2>
          <p>Patients Served</p>
        </div>

        <div className="counter--item">
          <h2>37+</h2>
          <p>Served States</p>
        </div>

        </div>

      </section>

      <section className='why--container'>

        <div className="why--image">

          <img src={require('../../assets/why--image.jpg')} alt="Why Image" />

        </div>

        <div className="why--content">

          <div className="why--head--content">
            <h2 className='h2'>Why Texas Star DME</h2>
            <p className='p'>Since 2000, when we started in the North Texas area, we've been happy to meet the needs of hospice care providers and patients. Hospices and direct suppliers of DME benefit from our value and benefits.</p>
          </div>

          <div className="why--listitem">

            <div className="why--item">
              <FaArrowRight className='icon' />
              <p className='p'>DME provider with a personalized touch and customer care.</p>
            </div>

            <div className="why--item">
              <FaArrowRight className='icon' />
              <p className='p'>Automated DME workflows and solutions that are 100% efficient and HIPAA compliant.</p>
            </div>

            <div className="why--item">
              <FaArrowRight className='icon' />
              <p className='p'>Streamline operations with Serious ERP for order management - easy-to-use and efficient with real-time tracking.</p>
            </div>

            <div className="why--item">
              <FaArrowRight className='icon' />
              <p className='p'>We are committed to having a customer support team that is available 24 hours a day, 7 days a week.</p>
            </div>

            <div className="why--item">
              <FaArrowRight className='icon' />
              <p className='p'>Dedicated Client Relations Manager.</p>
            </div>
            
            <div className="why--item">
              <FaArrowRight className='icon' />
              <p className='p'>Warehouse on the wheel - fully-equipped truck, faster delivery.</p>
            </div>

          </div>

          <NavLink className={"btn"} to="/About">Learn More About Us</NavLink>
        </div>


      </section>

      {/* Serives */}
      <section className='services--container'>
        <div className="services--head--content">
          <h2 className='h2'>Our Services</h2>

          <p className='p'>Texas Star is a North Texas based medical equipment and supplies provider serving hospices. We offer a wide range of products and services, from mobility support equipment to ventilators. Our specialized and friendly technicians give you the best customer service, offer the latest equipment and supplies, and guide you through every step of the process. Texas Star DME provides 24/7 customer service. We're here for you around the clock! Our technicians are trained and certified to install, maintain, and repair a wide range of equipment, so you can trust that we will not leave anything to chance.</p>

          <NavLink className={"btn"} to="/Services">Learn More Our Services</NavLink>
        </div>

        

        <div className="cards">
          <div className="card">
            <img src={require('../../assets/icon.svg').default} alt="icon" />
            <h3 className='h3'>Local {<br/>} warehouse</h3>
            <p className='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
          </div>

          <div className="card">
            <img src={require('../../assets/icon.svg').default} alt="icon" />
            <h3 className='h3'>On-time {<br/>} deliveries</h3>
            <p className='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
          </div>

          <div className="card">
            <img src={require('../../assets/icon.svg').default} alt="icon" />
            <h3 className='h3'>Experienced {<br/>} staff and team</h3>
            <p className='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
          </div>

          <div className="card">
            <img src={require('../../assets/icon.svg').default} alt="icon" />
            <h3 className='h3'>Reliable {<br/>} Inventory</h3>
            <p className='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
          </div>

          <div className="card">
            <img src={require('../../assets/icon.svg').default} alt="icon" />
            <h3 className='h3'>Easy-to-use {<br/>} technology</h3>
            <p className='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
          </div>
          
        </div>
      </section>

      {/* testimonial */}
      <div className="testimonial--container">
          <div className="testimonial--wrapper margin--wrapper">
            <div className="left--content">
              <h2 className="h2">What Our Customers Are Saying</h2>
              <p className="p">Lorem Ipsum is simply text of the printing and typesetting.</p>
            </div>

            <div className="right--content">
              <Slider />
            </div>
          </div>
        </div>


    <Contacts />

    </div>
  )
}

export default Home