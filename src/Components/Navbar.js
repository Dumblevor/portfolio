import { Link, NavLink } from "react-router-dom"
import React from "react"
import './Navbar.css';


function Navbar() {
  return (
    <div>
      <h1>Dimitar Vidolov's portfolio</h1>
      <header className="headerStyle">
        <div className="leftDiv">
          <Link className="navlink logo" to="/"> &lt; DV &gt;
            {/* <img className="logo-image" src="" /> */}
          </Link>
{/* 
          <a href="#section2" className="navlink left">
            about
          </a>
          <a href="#section3" className="navlink left">
            contact
          </a> */}
        </div>

        <div className="rightDiv">
        <a className="navlink link--logo-image mail" href="mailto:dimitar.vidolov@gmail.com">✉️</a>
          <a className="navlink" href="https://linkedin.com">
            <img className="link--logo-image" alt="linkedin logo" src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" />
          </a>
          <a className="navlink" href="https://github.com">
            <img className="link--logo-image" src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" alt="github logo" />
          </a>
        </div>
      </header>

    </div>
  )
}



export default Navbar

