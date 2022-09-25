import React from "react"
import "./Landing.css";
import projectsData from "../data/data";
import Project from "./Project";
import skillsData from "../data/skillsData";
import avatartImage from "../assets/avatar-image.webp"
import { Link } from "react-router-dom";
import dvLogo from '../assets/logos/dv-logo.webp';
import { NavHashLink } from 'react-router-hash-link';

export default function Landing() {

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
            <NavHashLink smooth className="button" to="/#section2">
              See Projects
            </NavHashLink>
            <Link className="button" to="/about">
              More about &gt;
            </Link>
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
      </section>
    </div>
  </>
  )
}

