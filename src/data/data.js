import screen1 from '../assets/screens/compressedScreen1.mp4';
import screen2 from '../assets/screens/screen2.webp';
import screen3 from '../assets/screens/screen3.webp';
import screen4 from '../assets/screens/screen4.webp';
import vkushtyScreen from '../assets/screens/vkushty.webp';
import moneyflowScreen from '../assets/screens/moneyflow.webp';
import aiMyLogoScreen from '../assets/screens/aimylogo.webp';
import aiPetPhotosScreen from '../assets/screens/aipetphotos.webp';

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
    name: "Solo Project: AI My Logo | aimylogo.com",
    type: "AI Logo Generator with Stylized Text",
    logoLink: "",
    description: "A web app that enables users to generate any logo in 2.9s for $0.12 - perfect for any small business or service looking to have amazing branding and almost no cost. Users can enjoy ready made templates, remix other users logos or prompt their own. Uses Vite & MERN.",
    deploymentLink: "https://aimylogo.com",
    repoLink: "",
    screen: aiMyLogoScreen,
    id: 8,
  },
  {
    name: "Solo Project: AI Pet Photos | aipetphotos.com",
    type: "Auto AI Pet Portraits Generator",
    logoLink: "",
    description: "Using React & Node.js, together with several AI models, I created a web app that allows users to upload images of their pet and get a 20+ portraits. The software works on any cat and dog breed, providing 2K hyper realistic images. The project was to be completed individually within 60 days, part-time, and has paying users.",
    deploymentLink: "https://aipetphotos.com",
    repoLink: "",
    screen: aiPetPhotosScreen,
    id: 7,
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