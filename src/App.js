import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";


function App() {
  const emailAddress = "dimitar.vidolov@gmail.com"
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>

      <footer>
        <p>Reach me on <a className="" href="https://www.linkedin.com/in/dvidolov/"target="_blank" rel="noopener noreferrer"> LinkedIn</a> or send me an <a className="" href={`mailto:${emailAddress}`}>email</a>.
        </p>
      </footer>
    </div>

  );
}

export default App;
