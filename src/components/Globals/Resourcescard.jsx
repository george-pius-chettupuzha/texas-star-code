import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Resourcescard({Heading}) {
  return (
    <div className='card--container'>
      <h2 className='h2'>{Heading}</h2>
      <a href="https://www.google.com/" target="_blank">Learn More <FaArrowRight /></a>
    </div>
  )
}

export default Resourcescard