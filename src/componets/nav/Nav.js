import React , {useState} from 'react'
import "./nav.css"
import { GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function Nav() {

    const [active , setactive] = useState("")
    const [btn , setbtn] = useState(false)

  return (
    <div className={btn ? "nav": "nav"}>
      <div className='logo'>logo</div>

      <div className={btn ? "ul add" : "ul"}>
          <a href='#' className={active === "home" ? "active" : ""} onClick={()=> setactive("home")} >home</a>
          <a href='#' className={active === "about" ? "active" : ""} onClick={()=> setactive("about") }>about</a>
          <a href='#' className={active === "conteact" ? "active" : ""} onClick={()=> setactive("conteact") }>conteact</a>
          <a href='/' className={active === "redmore" ? "active" : ""} onClick={()=> setactive("redmore") }> red more</a>
      </div>

      <button className='btn'> get in thatch </button>
   
        {btn ?  <AiOutlineCloseCircle className='menu' onClick={()=> setbtn(!btn)} /> :  <GiHamburgerMenu className='menu' onClick={()=> setbtn(!btn)} /> }
    </div>
  )
}
