import React from 'react'

function Hero({Head, Paragraph, CtaName, Image}) {
  return (

      <section className="hero--container">

        <div className="hero--banner">
          <img src={Image} alt="Home Hero Banner" />
        </div>

        <div className="hero--content">

          <div className="hero--head">

            <h1 className='h1'>{Head}</h1>

            <p className='p'>{Paragraph}</p>

          </div>

          <div className="hero--cta">
            <a className={"btn"} href="https://www.google.com/" target="_blank">{CtaName}</a>
          </div>

        </div>

      </section>
  )
}

export default Hero