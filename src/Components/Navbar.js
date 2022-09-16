import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css";
import { NavHashLink } from 'react-router-hash-link';


function Navbar() {

  return (
    <div>
      <h1>Dimitar Vidolov&apos;s portfolio</h1>
      <header className="headerStyle">
        <div className="leftDiv">
          <Link className="navlink logo" to="/"> &lt;D V&gt;
          </Link>
          <NavHashLink smooth className="navlink textlink" to="#section1">
            Projects
          </NavHashLink>
        </div>

        <div className="rightDiv">
          <a className="navlink link--logo-image mail" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#105;&#109;&#105;&#116;&#97;&#114;&#46;&#118;&#105;&#100;&#111;&#108;&#111;&#118;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">✉️</a>
          <a className="navlink" href="https://www.linkedin.com/in/dvidolov/" target="_blank" rel="noopener noreferrer">
            <img className="link--logo-image" alt="linkedin logo" src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" />
          </a>
          <a className="navlink" href="https://github.com/Dumblevor" target="_blank" rel="noopener noreferrer">
            <img className="link--logo-image" src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" alt="github logo" />
          </a>
        </div>
      </header>
    </div>
  )
}



export default Navbar

