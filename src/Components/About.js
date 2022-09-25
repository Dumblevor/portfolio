import React from "react";
import coverArt from "../assets/coverArt.webp"
import "./About.css";
import dvLogo from '../assets/logos/dv-logo.webp';


export default function About() {

  return (
    <div className="aboutwrapper">
      <img className="coverart" alt="coverart" src={coverArt} />

      <div className="textwrapper">
        <p>Driven as a software engineer with a passion for building user-focused products.
          My background in hospitality and food production provides a unique blend
          of perspectives that enhance my work.</p>
        <p>Through my previous work I developed a good business sense, critical thinking, as well grit, and a knack for negotiating and communication.
          <br />Coding the software projects below - I worked with JavaScript, React.js, Express.js, MongoDB, Python 3, Flask, PostgreSQL, CSS, HTML, Django.js, Node.js, GitHub, and Jira.
        </p>
        <p>
          As for human languages - I am fluent in English thanks to a 6-year stint in the UK, native in Bulgarian, and I recently took up Spanish. In my spare time, I ride snowmobiles, hike, kitesurf and dabble in real estate.
        </p>
      </div>
      <img className="logo" alt="Dimitar Vidolov logo" src={dvLogo} />
      <br/>
      <p>Reach me on <a className="titlelink" href="https://www.linkedin.com/in/dvidolov/" target="_blank" rel="noopener noreferrer">
        LinkedIn</a> or send me an <a className="titlelink" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#105;&#109;&#105;&#116;&#97;&#114;&#46;&#118;&#105;&#100;&#111;&#108;&#111;&#118;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">email</a>.
      </p>
    </div>
  )
}