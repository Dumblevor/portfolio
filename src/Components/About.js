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
        <p>
          My journey to becoming a Certified Product Manager (CPM) through Product School ignited a burning passion within me to delve deeper into the world of software development.
          <br /><br />
          I quickly became enamored with the field and found myself fully immersed as a software engineer, utilizing my unique background in hospitality and manufacturing to bring a fresh perspective to my work.
          My experience in these industries has honed my business acumen, critical thinking, negotiation skills and ability to communicate effectively.
          Through my previous work I developed a good business sense, critical thinking, as well grit, and a knack for negotiating and communication.
          <br />
          <br /> Coding <NavHashLink className="navHashLink" to="/#section2">
            these software projects</NavHashLink> as part of the General Assembly bootcamp - I gained hands-on experience working with a wide range of technologies including JavaScript, React.js, Express.js, MongoDB, Mocha, Chai, Python, Flask, PostgreSQL, CSS, HTML, Django.js, Node.js, GitHub, and Jira.
        </p>
        <p>
          In addition to my technical skills, I am also fluent in English, Bulgarian, and recently began learning Spanish.
          Outside of work, I am an avid outdoor enthusiast and can often be found riding snowmobiles, hiking, and kitesurfing. I also have a keen interest in real estate, which I pursue in my spare time.
        </p>

        <p>
          I hold a BSc in Business Studies from City University, an MBA from ESADE and I specialised in entrepreneurship with a 5 months program at Babson College.
        </p>
      </div>

      <img className="logo" alt="Dimitar Vidolov logo" src={dvLogo} />
      <br />

      <br />
      <div className="techSkillsDiv">

        {skillsData && skillsData.map((skill) => {
          return (
            <div className="skills-wrap" key={skill.name}>
              <img className="skill-image" src={skill.source} alt={`${skill.name} logo`} />
              <p>{skill.name}
              </p>
            </div>
          )
        })}</div>
    </div>

  )
}