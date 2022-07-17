import React , {useState} from 'react'
import "./nav.css"
export default function Nav() {

    const [active , setactive] = useState("")

  return (
    <div className='nav'>
      <div className='logo'>logo</div>

      <div className='ul'>
          <a href='#' className={active === "home" ? "active" : ""} onClick={()=> setactive("home")} >home</a>
          <a href='#' className={active === "about" ? "active" : ""} onClick={()=> setactive("about") }>about</a>
          <a href='#' className={active === "conteact" ? "active" : ""} onClick={()=> setactive("conteact") }>conteact</a>
          <a href='/' className={active === "redmore" ? "active" : ""} onClick={()=> setactive("redmore") }> red more</a>
      </div>

      <button className='btn'> get in thatch </button>
    </div>
  )
}
