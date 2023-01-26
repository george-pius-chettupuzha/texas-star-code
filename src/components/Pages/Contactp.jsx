import React from 'react';

// Globals
import Hero from '../Globals/Hero';
import Contacts from '../Globals/Contacts';


const Contactp = () => {
    return (
        <div className='contactp--container'>

            <section className='hero--container contact--banner bg--none'>
                <Hero
                    Image={require('../../assets/hero--contact.jpeg')}
                    Head={"Need to get in touch with us? No problem!"}
                    Paragraph={"You can reach us by email, phone, our website, or through social media. We're always happy to help out however we can."}
                    CtaName={"Contact Our Representative"}
                />
            </section>

            <div className="contact--wrapper">
                <Contacts />
            </div>
        </div>
    )
}

export default Contactp
