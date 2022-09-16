import React from "react"
import "./Landing.css";
import projectsData from "../data/data";
import Project from "./Project";
import coverArt from "../assets/coverArt.png"
import skillsData from "../data/skillsData";

function Landing() {

  return (<>

    <div className="landingPage">

      <section id="section0">
        <img className="coverart" alt="coverart" src={coverArt} />
        <div className="avatar">

          <img className="avatar-image" src="https://avatars.githubusercontent.com/u/100156884?v=4" alt="dimitar vidolov's logo" />

          <div className="avatar-text">
            <h2>Hi, I&apos;m Dimitar Vidolov</h2>
            <h4>I like tinkering with software and kitesurfing.
              Recently, I completed General Assembly&apos;s
              Immersive Software Engineering boot camp,
              where I built 4 projects you can see below.
            </h4>
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
        </div>
      </section >

      <section id="section1">
        <div className="techSkillsDiv">

          {skillsData && skillsData.map((skill) => {
            return (
              <div className=" skills-wrap" key={skill.name}>
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
        <p>Reach me on <a className="" href="https://www.linkedin.com/in/dvidolov/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> or send me an <a className="" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#105;&#109;&#105;&#116;&#97;&#114;&#46;&#118;&#105;&#100;&#111;&#108;&#111;&#118;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">email</a>.
        </p>
      </section>
    </div >
  </>
  )
}

export default Landing