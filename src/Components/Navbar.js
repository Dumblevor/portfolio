import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css";
import { NavHashLink } from 'react-router-hash-link';


function Navbar() {
  const emailAddress = "dimitar.vidolov@gmail.com"

  return (
    <div>
      <h1>Dimitar Vidolov&apos;s portfolio</h1>
      <header className="headerStyle">
        <div className="leftDiv">
          <Link className="navlink logo" to="/"> &lt;DV&gt;
          </Link>
          <NavHashLink smooth className="navlink textlink" to="#section1">Projects</NavHashLink>        </div>

        <div className="rightDiv">
          <a className="navlink link--logo-image mail" href={`mailto:${emailAddress}`}>✉️</a>
          <a className="navlink" href="https://www.linkedin.com/in/dvidolov/"  target="_blank" rel="noopener noreferrer">
            <img className="link--logo-image" alt="linkedin logo" src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" />
          </a>
          <a className="navlink" href="https://github.com/Dumblevor"  target="_blank" rel="noopener noreferrer">
            <img className="link--logo-image" src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" alt="github logo" />
          </a>
        </div>
      </header>
    </div>
  )
}



export default Navbar

