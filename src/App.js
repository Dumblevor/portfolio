import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>

      <footer>
        <p>Reach me on <a className="" href="https://www.linkedin.com/in/dvidolov/"target="_blank" rel="noopener noreferrer"> LinkedIn</a> or send me an <a className="" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#105;&#109;&#105;&#116;&#97;&#114;&#46;&#118;&#105;&#100;&#111;&#108;&#111;&#118;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">email</a>.
        </p>
      </footer>
    </div>

  );
}

export default App;
