import React from "react"
import "./Landing.css";
import projectsData from "../data/data";
import Project from "./Project";
import skillsData from "../data/skillsData";
import avatartImage from "../assets/avatar-image.webp"
import { Link } from "react-router-dom";
import dvLogo from '../assets/logos/dv-logo.webp';

function Landing() {

  return (<>

    <div className="landingPage">

      <section id="section0">
        <div className="avatar">

          <img className="avatar-image" src={avatartImage} alt="dimitar vidolov's logo" />

          <div className="avatar-text">
            <h2>Hi, I&apos;m Dimitar Vidolov</h2>
            <h4>I like tinkering with software and kitesurfing.
              Recently, I completed General Assembly&apos;s
              Immersive Software Engineering boot camp,
              where I built 4 projects you can see below.
            </h4>
            <Link className=" button" to="/about">Learn more ></Link>

          </div>
        </div>
      </section >

      <section id="section1">
        <div className="techSkillsDiv">

          {skillsData && skillsData.map((skill) => {
            return (
              <div className="skills-wrap" key={skill.name}>
                <img className="skill-image" src={skill.source} alt={`${skill.name} logo`} />
                <p>{skill.name}
                </p>
              </div>
            )
          })}

        </div>
      </section>

      <section id="section2">
        <h3 className="latestProjectsH3"> &lt; Projects &gt;</h3>
        <div className="projectsMap">
          {projectsData && projectsData.map((project) => {
            return (
              <div className="project" key={project.id}>
                <Project {...project} />
              </div>
            )
          })}
        </div>
      </section>

      <section id="section3">
      <img className="logo" alt="Dimitar Vidolov logo" src={dvLogo} />

        <p>Reach me on <a className="" href="https://www.linkedin.com/in/dvidolov/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> or send me an <a className="" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#105;&#109;&#105;&#116;&#97;&#114;&#46;&#118;&#105;&#100;&#111;&#108;&#111;&#118;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">email</a>.
        </p>
      </section>
    </div>
  </>
  )
}

export default Landing