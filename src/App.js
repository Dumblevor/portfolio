import React from "react"
import Navbar from "./components/Navbar"
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./components/Landing";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route parth="/" element={<Landing/ >} />

        </Routes>
      </Router>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
