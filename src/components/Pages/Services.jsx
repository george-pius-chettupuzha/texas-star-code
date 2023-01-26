import React from 'react';
import Hero from '../Globals/Hero';


function Services() {

  return (
    <div className='service--container'>
      <section className='hero--container services--banner'>
        <Hero
          Image={require('../../assets/hero--service.jpg')}
          Head={"What We Do In Texas Star"}
          Paragraph={"Hospitality without the hassle! Texas Star DME provides hospices with an easy-to-use DME management solution, maintains a high-level stock inventory, and provides exceptional customer care service. Our trained personnel assist customers with all kinds of inquiries and helps in improving the patient care"}
          CtaName={"Contact Our Representative"}
        />
      </section>

      <section className='services--content'>
        <div className="top--content">
          <h2 className="h2">Services Texas Star HMES</h2>
          <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div className="down--content">
          <div className="cards">
            <div className="card">
              <img src={require('../../assets/services--image 01.jpg')} alt="Services Image" />
              <div className="content">
                <h3 className='h3'>Local warehouse</h3>
                <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div className="card">
              <img src={require('../../assets/services--image 02.jpg')} alt="Services Image" />
              <div className="content">
                <h3 className='h3'>Local warehouse</h3>
                <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div className="card">
              <img src={require('../../assets/services--image 03.jpg')} alt="Services Image" />
              <div className="content">
                <h3 className='h3'>Local warehouse</h3>
                <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div className="card">
              <img src={require('../../assets/services--image 04.jpg')} alt="Services Image" />
              <div className="content">
                <h3 className='h3'>Local warehouse</h3>
                <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div className="card">
              <img src={require('../../assets/services--image 01.jpg')} alt="Services Image" />
              <div className="content">
                <h3 className='h3'>Local warehouse</h3>
                <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services