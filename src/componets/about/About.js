import React from 'react'
import about from "../../about.png"

import "./about.css"

export default function About() {
  return (
    <div className='about-1'>
        <h1 className='aboutme'> abot me</h1>
        <div className='img1'>
            <img src={about}/>
        </div>
        <div className='about-me'>
           <h2>ibrahim korakir</h2>
           <p> 
           Lorem ipsum dolor sit amet cons adipisicing elit. Minima, consectetur <br/> ullam?
           </p>
           <button className='btn'> download cv</button>
        </div>
    </div>
  )
}
