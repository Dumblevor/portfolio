import React from "react"
import "./Landing.css";
import projectsData from "../data/data";
import Project from "./Project";
import coverArt from "../assets/coverArt.png"

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
              Recently, I graduated General Assembly&apos;s
              Immersive Software Engineering bootcamp,
              where I built some projects you can see below.
            </h4>
            <p>Driven as a software engineer with a passion for building user focused products. <br />
              My background in hospitality and food production provide a unique blend
              of perspectives that enhance my work.<br /><br />
              Through my software projects I worked with JavaScript, React.js, Express.js, MongoDB, Python 3, Flask, PostgreSQL, CSS, HTML, Django.js, Node.js, GitHub and Jira.
            </p>
          </div>
        </div>
      </section >
      <section id="section1">
        <div className="techSkillsDiv">
          <img className="skills" alt="JavaScript logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Javascript_Logo.png/640px-Javascript_Logo.png" />
          <img className="skills" alt="React.js logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" />
          <img className="skills" alt="Express.js logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/121px-Expressjs.png" />
          <img className="skills" alt="MongoDB logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/250px-MongoDB_Logo.svg.png" />
          <img className="skills" alt="Python logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Python_logo_1990s.svg/220px-Python_logo_1990s.svg.png" />
          <img className="skills" alt="Flask logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/121px-Flask_logo.svg.png" />
          <img className="skills" alt="PostgreSQL logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/121px-Postgresql_elephant.svg.png" />
          <img className="skills" alt="CSS logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png" />
          <img className="skills" alt="HTML logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png" />
          <img className="skills" alt="Django.js logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/121px-Django_logo.svg.png" />
          <img className="skills" alt="Node.js logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />
          <img className="skills" alt="GitHub logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/GitHub_logo_2013.svg/220px-GitHub_logo_2013.svg.png" />
          <img className="skills" alt="Jira logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Jira_%28Software%29_logo.svg/250px-Jira_%28Software%29_logo.svg.png" />

        </div >
      </section>


      <section id="section2">
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
    </div >

  </>
  )
}

export default Landing