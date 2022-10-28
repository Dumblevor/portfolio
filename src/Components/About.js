import React from "react";
import coverArt from "../assets/coverArt.webp"
import "./About.css";
import dvLogo from '../assets/logos/dv-logo.webp';
import { NavHashLink } from 'react-router-hash-link';
import skillsData from "../data/skillsData";

export default function About() {

  return (
    <div className="aboutwrapper">
      <img className="coverart" alt="coverart" src={coverArt} />

      <div className="textwrapper">
        <p> Going through Product School to become a Certified Product Manager (CPM) inspired me to learn more about software.
          <br /><br />
          After the a month I was hooked as a software engineer with a passion for building products.
          My background in hospitality, food production and agriculture provides a unique blend
          of perspectives that enhance my work.</p>
        <p>Through my previous work I developed a good business sense, critical thinking, as well grit, and a knack for negotiating and communication.
          <br />
          <br /> Coding <NavHashLink className="navHashLink" to="/#section2">
            these software projects</NavHashLink> as part of the GA course - I worked with JavaScript, React.js, Express.js, MongoDB, Python 3, Flask, PostgreSQL, CSS, HTML, Django.js, Node.js, GitHub, and Jira.
        </p>
        <p>
          As for human languages - I am fluent in English, native in Bulgarian, and I recently took up Spanish. In my spare time, I ride snowmobiles, hike, kitesurf and dabble in real estate. <br />
          <br />
          My BSc is in Business Studies from City University, MBA from ESADE and I did a 5 months entrepreneurship stint at Babson College.

        </p>
      </div>
      <img className="logo" alt="Dimitar Vidolov logo" src={dvLogo} />
      {/* <div className="techSkillsDiv">

        {skillsData && skillsData.map((skill) => {
          return (
            <div className="skills-wrap" key={skill.name}>
              <img className="skill-image" src={skill.source} alt={`${skill.name} logo`} />
              <p>{skill.name}
              </p>
            </div>
          )
        })}</div> */}
    </div>

  )
}