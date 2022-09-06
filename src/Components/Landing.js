import React from "react"
import { NavLink } from "react-router-dom"
import './Landing.css';



function Landing() {

  return (
    <div>
      <header>
        <NavLink to="/linkedin">LI</NavLink>
        <NavLink to="/github">GH</NavLink>
      </header>
    </div>
  )
}


export default Landing