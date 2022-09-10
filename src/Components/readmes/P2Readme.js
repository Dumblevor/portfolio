import React from "react"
import "./P2Readme.css"
import screen1 from "../../assets/screens/p2/preview_for_readme.png"
import screen2 from "../../assets/screens/p2/miro-screen.png"
import screen3 from "../../assets/screens/p2/char_display_screen.png"

function P2Readme() {

  return (
    <div className="p2div">

      <h2 id="random-character-from-rick-morty">Random Character from Rick &amp; Morty</h2>
      <h3 id="overview">Overview</h3>
      <p>This is the second project of the software engineering immersive course at General Assembly London. The assignment was to <strong>build a React application</strong> that consumes a <strong>public API</strong>. The project was to be completed in a <strong>group of 2</strong> within <strong>5</strong> over 2 weeks.
        My partner and I chose a Rick &amp; Morty API whereas our site would request and display a random character dependant on the user gender selection. </p>
      <p>Access <a href="https://rick-and-morty-randomizer.netlify.app">here</a>.
        Repo <a href="https://github.com/Dumblevor/project-2">here</a>.
        Preview: <br/>        <img src={screen1} alt="randomizer-preview" />
        <br />
        Three buttons are available for selection and we have clear instructions underneath to guide the user.</p>
      <h2 id="technologies-used">Technologies used</h2>
      <ul>
        <li>React</li>
        <li>Bulma</li>
        <li>JavaScript</li>
        <li>Git and GitHub</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <h2 id="approach">Approach</h2>
      <p>We wanted to make something simple, but yet fun so we decided on using a Rick &amp; Morty API, inspired by the seriess :
        <a href="https://rickandmortyapi.com">https://rickandmortyapi.com</a>.
        We decided on just 3 pages: a landing page, a display page and an about.
        We used the react-router-dom Link elements as buttons to point different genders using a seperate component DisplayCharacter.js.
        I took the lead on DisplayCharacter.js - it uses the gender chosen to fetch random character from the API.
        Moreover, if random has been chosen - it will randomise between Female, Male, Genderless and Unknown and then fetch from the API.
        The data from the response is then passed through via props to another component - Character.js, which gives the data structure.
        We decided to learn about Bulma na use it for styling this project, which seemed appropriate given the theme. </p>
      <h2 id="timeline">Timeline</h2>
      <ul>
        <li>Day 1 - Whiteboarding &amp; pseudo</li>
        <li>Day 2 - MVP</li>
        <li>Day 3 - Bug fixes </li>
        <li>Day 5 - CSS and styling</li>
      </ul>

      <h3 id="landing-page">Landing Page</h3>
      <img src={screen2} alt="Miro-screenshot" />
      <p>
        <h3 id="character-page">Character Page</h3>
        We also decided on providing the option for the user to choose a new gender as an extra feature.
        <img src={screen3} alt="Display_character-screen" />
        <h2 id="assets-credits">Assets &amp; credits</h2>
       - Logo: Dimitar Vidolov (canva.com).</p>


    </div>
  )

}

export default P2Readme