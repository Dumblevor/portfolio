import React from "react"
import "./Project.css";

function Project(props) {

  return (
    <div className="projectDiv" key={props.name}>
      <h3 className="projectH3">{props.name}</h3>
      <h4>{props.type}</h4>
      <div className="contentBlock">
        <img className="projectScreen" src={props.screen} alt={`${props.name} screen `} />
        <p>{props.description}</p>
      </div>

      <div className="buttonGroup">
        <a href={props.deploymentLink} className="productionButton button">
          Live &gt;

        </a>
        <a href={props.repoLink} className="repoButton button">
          Repo &gt;
        </a>
      </div>

    </div >

  )
}

export default Project

