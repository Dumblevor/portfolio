import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavHashLink } from 'react-router-hash-link';
import dvLogo from '../assets/logos/dv-logo.webp';
import liLogo from "../assets/logos/LI-In-Bug.webp";
import ghLogo from "../assets/logos/GitHub-Mark-64px.webp";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <div>
      <h1>Dimitar Vidolov&apos;s portfolio</h1>
      <header className="headerStyle">
        <div className="leftDiv">
          
          {/*<NavHashLink smooth className="navlink logo" to="/#section0"> &lt;D V&gt;*/}

          <NavHashLink smooth className="logo-wrapper" to="/#">
            <img className="logo" alt="Dimitar Vidolov logo" src={dvLogo} />
          </NavHashLink>

          <NavHashLink smooth className="navlink textlink" to="/#section2">
            Projects
          </NavHashLink>
          <NavLink to="/about" className="navlink textlink">
            About
          </NavLink>
        </div>

        <div className="rightDiv">
          <a className="navlink link--logo-image mail" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#105;&#109;&#105;&#116;&#97;&#114;&#46;&#118;&#105;&#100;&#111;&#108;&#111;&#118;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">✉️</a>
          <a className="navlink" href="https://www.linkedin.com/in/dvidolov/" target="_blank" rel="noopener noreferrer">
            <img className="link--logo-image" alt="linkedin logo" src={liLogo} />
          </a>
          <a className="navlink" href="https://github.com/Dumblevor" target="_blank" rel="noopener noreferrer">
            <img className="link--logo-image" src={ghLogo} alt="github logo" />
          </a>
        </div>
      </header>
    </div>
  )
}

