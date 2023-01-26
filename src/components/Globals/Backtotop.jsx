import React from 'react';
import {useEffect, useState} from 'react';
import { FaArrowUp } from "react-icons/fa";

function Backtotop() {

    const [backToTopCta, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY){
                setBackToTop(true)
            }
            else{
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
     backToTopCta && (
        <button className='btn' onClick={scrollUp}>< FaArrowUp /></button>
    )
  )
}

export default Backtotop