import screen1 from '../assets/screens/compressedScreen1.mp4';
import screen2 from '../assets/screens/screen2.webp';
import screen3 from '../assets/screens/screen3.webp';
import screen4 from '../assets/screens/screen4.webp';

const projectsData = [
  {
    name: "Latest Solo Project: Firesell | @ General Assembly",
    type: "App Store",
    logoLink: "",
    description: "An app store inspired by App Sumo, though the idea was that one can sell any kind of digital content, e.g. 3D models, browser extensions, etc. The assignment was to create a full-stack website with React and Flask. The project was to be completed individually within 5 days over 2 weeks, for a total of 30 hours.",
    deploymentLink: "https://firesell2.netlify.app",
    repoLink: "https://github.com/Dumblevor/firesell_front",
    screen: screen4,
    id: 4,
  },
  {
    name: "Group Project: Hackertrees | @ General Assembly",
    type: "Professional Social Network",
    logoLink: "",
    description: "A more private social professional network, inspired by teamblind.com. The assignment was to create a full-stack website with React and Node.js. The project was to be completed in a group within 6 days over 2 weeks.",
    deploymentLink: "https://hackertrees.netlify.app",
    repoLink: "https://github.com/Dumblevor/hackertrees_front",
    screen: screen3,
    id: 3,
  },
  {
    name: "Solo Project: Invaders 23 | @ General Assembly",
    type: "Online Game",
    logoLink: "",
    description: "Web-based vanilla JavaScript game, inspired by the classic Space Invaders. The assignment was to create a grid-based game to be rendered in the browser, using HTML, and CSS and JavaScript. The project was to be completed individually within 6 days over 3 weeks.",
    deploymentLink: "https://dumblevor.github.io/spce_inv1/",
    repoLink: "https://github.com/Dumblevor/spce_inv1",
    screen: screen1,
    id: 1,
  },
  {
    name: "Duo Project: 3rd Party API with React | @ General Assembly",
    type: "3rd party API consumption",
    logoLink: "https://rick-and-morty-randomizer.netlify.app/static/media/RandomMORTY-2.d921ccb5adfe56b82ccb.gif",
    description: "Used a Rick and Morty API whereas our site would request and display a random character dependant on the user gender selection. The assignment was to build a React application that consumes a public API. The project was to be completed in a group of 2 within 5 days over 2 weeks.",
    deploymentLink: "https://rick-and-morty-randomizer.netlify.app",
    repoLink: "https://github.com/Dumblevor/project-2",
    screen: screen2,
    id: 2,
  }
]

export default projectsData