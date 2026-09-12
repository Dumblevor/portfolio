import screen1 from '../assets/screens/compressedScreen1.mp4';
import screen2 from '../assets/screens/screen2.webp';
import screen3 from '../assets/screens/screen3.webp';
import screen4 from '../assets/screens/screen4.webp';
import vkushtyScreen from '../assets/screens/vkushty.webp';
import moneyflowScreen from '../assets/screens/moneyflow.webp';

const projectsData = [
  {
    name: "Solo Project: Vkushty | Live at vkushty.com",
    type: "Real Estate Marketing & Lead Generation",
    logoLink: "",
    description: "Bilingual (Bulgarian / English) marketing and lead-generation site for a gated community of four contemporary houses in Bistritsa, Sofia. React front end with a 3D house viewer, a markdown-driven blog and a paginated construction gallery, backed by Netlify Functions: gated brochure downloads feed a queue that scheduled jobs drain as a follow-up email sequence, alongside a newsletter broadcast queue. GA4 and the Meta Pixel are consent-gated behind a cookie banner, and the site is SEO-tuned with per-language sitemaps and canonical trailing-slash redirects.",
    deploymentLink: "https://vkushty.com",
    repoLink: "",
    screen: vkushtyScreen,
    id: 6,
  },
  {
    name: "Solo Project: Moneyflow | Live at playmoneyflow.com",
    type: "Financial Board Game — Web, iOS & Android",
    logoLink: "",
    description: "A full-stack financial board game inspired by Cashflow and Monopoly: buy real estate, invest in stocks, take loans and build enough passive income to escape the 9-to-5. The turn engine — dice, randomly generated boards, economic cycles, tax and lending rules such as debt-to-income and loan-to-value caps — is shared between client and server, so single player runs locally while the server stays authoritative for real-time multiplayer with matchmaking and Elo ratings. React and Vite on Netlify, Node / Express with Socket.IO and MongoDB on Render, packaged for iOS and Android with Capacitor.",
    deploymentLink: "https://playmoneyflow.com",
    repoLink: "",
    screen: moneyflowScreen,
    id: 5,
  },
  {
    name: "Solo Project: Firesell | @ General Assembly",
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
    logoLink: "",
    description: "Used a Rick and Morty API whereas our site would request and display a random character dependant on the user gender selection. The assignment was to build a React application that consumes a public API. The project was to be completed in a group of 2 within 5 days over 2 weeks.",
    deploymentLink: "https://rick-and-morty-randomizer.netlify.app",
    repoLink: "https://github.com/Dumblevor/project-2",
    screen: screen2,
    id: 2,
  }
]

export default projectsData