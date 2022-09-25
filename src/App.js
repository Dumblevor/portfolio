import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      <footer>
      </footer>
    </div>

  );
}

export default App;
