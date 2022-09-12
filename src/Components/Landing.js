import React from "react"
import "./Landing.css";
import projectsData from "../data/data";
import Project from "./Project";


function Landing() {

  return (
    <div className="landingPage">
      <section id="section0">
        <div className="avatar">
          <img className="avatar-image" src="https://avatars.githubusercontent.com/u/100156884?v=4" alt="dimitar vidolov's logo" />

          <div className="avatar-text">
            <h2>Hi, I&apos;m Dimitar Vidolov</h2>
            <h4>I like tinkering with software and kitesurfing.
              Recently, I graduated General Assembly&apos;s 
              Immersive Software Engineering bootcamp,
              where I built some projects you can see below.
            </h4>
            <p>Driven as a software engineer with a passion for building user focused products. <br/>
              My background in hospitality and food production provide a unique blend
              of perspectives that enhance my work.
            </p>
          </div>

        </div>
      </section>


      <section id="section1">
        <h3 className="latestProjectsH3"> &lt; Latest Projects &gt;</h3>
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
    </div>
  )
}

export default Landing