import React from "react"
import Navbar from "./components/Navbar"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./components/Landing";
import P2Readme from "./components/readmes/P2Readme";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/p2readme" element={<P2Readme />} />

        </Routes>
      </Router>

      <footer>
        <p>Footer</p>
      </footer>
    </div>

  );
}

export default App;
