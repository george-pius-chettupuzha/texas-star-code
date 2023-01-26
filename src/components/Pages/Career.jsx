import React from 'react';
import Hero from '../Globals/Hero';
import Contacts from '../Globals/Contacts';


function Career() {
  return (
    <div className="career--container">
      <section className='hero--container career--banner'>
        <Hero
          Image={require('../../assets/hero--career.jpg')}
          Head={"Career in Texas Star"}
          Paragraph={"Looking for a new opportunity in the medical equipment and supply industry? Check out our latest openings in Texas Star!"}
          CtaName= {"Apply Now"}
        />
      </section>

      <section className='opening--container'>
        <div className='top--content'>
            <h2 className='h2'>We're always looking for talented and ambitious individuals to join our team.</h2>
            <p className='p'>If you see a position that interests you, click "Apply" and upload your resume.
              We'll get back to you as soon as possible! </p>
        </div>

        <div className="down--content">
          <div className='cards'>
            <div className="card">
              <h3 className='h3'>About the Role</h3>
              <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
            <div className="card">
              <h3 className='h3'>About You</h3>
              <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
            <div className="card">
              <h3 className='h3'>Benefits</h3>
              <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
          </div>
        </div>
      </section>

      <Contacts />
    </div>
  )
}

export default Career