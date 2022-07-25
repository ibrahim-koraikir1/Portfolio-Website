import React from 'react'
import {BsFacebook ,BsGithub , BsTwitter} from "react-icons/bs"
import "./home.css"
import img from "../../../11.png"

export default function Home() {

  return (
    <div className='home'>
     <div className='icon'>
       <a><BsFacebook size={25}/></a>
       <a><BsGithub size={25}/></a>
       <a>< BsTwitter size={25}/></a>
     </div>
     <div className='img'>
        <img src={img}/>
     </div>
     <div className='about'>
      <h1> hello iam <span>ibrahim</span> </h1>
      <h3> iam front-end web dve</h3>
    
      <p>Lorem ipsum dolor sit amet cons <br/> adipisicing elit. Minima, consectetur <br/> ullam?</p>
            <button class="btn">Contact Me</button>
      </div>
    </div>
  )
}
