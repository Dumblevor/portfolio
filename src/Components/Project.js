import React from "react"
import "./Project.css";

export default function Project(props) {

  return (
    <div className="projectDiv" key={props.name}>
      <a href={props.repoLink} className="titlelink" target="_blank" rel="noopener noreferrer">
        <h3 className="projectH3">{props.name}</h3>
        <h4>{props.type}</h4>
      </a>

      <div className="contentBlock">
        {props.id !== 1
        ? <img className="projectScreen" src={props.screen} alt={`${props.name} screen `} />
        : <video className="projectScreen" controlsList="nodownload" controls>
            <source className="" src={props.screen} type="video/mp4" />
          </video>
        }
        <div className="right-handside-content">
          <p>{props.description}</p>
          <div className="buttonGroup">
            <a href={props.deploymentLink} className="productionButton button" target="_blank" rel="noopener noreferrer">
              Live &gt;
            </a>
            <a href={props.repoLink} className="repoButton button" target="_blank" rel="noopener noreferrer">
              Repo / ReadMe &gt;
            </a>
          </div>
        </div>
      </div>



    </div >

  )
}
