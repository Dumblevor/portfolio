import React from "react"
import { NavLink } from "react-router-dom"
import './Landing.css';
import projectsData from "../data/data";
import Project from "./Project";


function Landing() {

  return (
    <div className="landingPage">
      <section id="section0">
        <div className="avatar">
          <div className="avatar-text">
            <h3>Hi, I'm Dimitar Vidolov</h3>
            <h4>I like tinkering with software and kitesurfing.<br />
              Recently, I graduated General Assembly's Immersive Software Engineering bootcamp, where I built some project you can see below.
            </h4>
            <p className="aboutP">Driven full-stack software engineer with a passion for building products with a great user experience.
              Continually learning and exploring new technologies, to challenge myself and to deliver better value for the user. My background in hospitality, food production and teaching kitesurf provide a unique blend of perspectives that enhance my work.
            </p>
          </div>
          <img className="avatar-image" src="https://avatars.githubusercontent.com/u/100156884?v=4" alt="dimitar vidolov's logo" />
        </div>
      </section>



      <section id="section1">
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

      <section id="section2">

      </section>

      <section id="section3">

      </section>

      <section id="section4">

      </section>

    </div>
  )
}

export default Landing