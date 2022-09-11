import React from "react"
import "./Project.css";

function Project(props) {

  return (
    <div className="projectDiv" key={props.name}>
      <a href={props.repoLink} className="titlelink">
        <h3 className="projectH3">{props.name}</h3>
        <h4>{props.type}</h4>
      </a>

      <div className="contentBlock">
        <img className="projectScreen" src={props.screen} alt={`${props.name} screen `} />

        <div className="right-handside-content">
          <p>{props.description}</p>
          <div className="buttonGroup">

            <a href={props.deploymentLink} className="productionButton button">
              Live &gt;
            </a>

            <a href={props.repoLink} className="repoButton button">
              Repo / ReadMe &gt;
            </a>
          </div>




        </div>
      </div>



    </div >

  )
}

export default Project

