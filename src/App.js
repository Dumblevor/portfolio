import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Preview from "./components/Preview";

// import ExampleOne from "./components/ExampleOne";
// import ExampleTwo from "./components/ExampleTwo";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/exampleone" element={<ExampleOne />} />
          <Route path="/exampletwo" element={<ExampleTwo />} /> */}
          {/* <Route path="/examplethree" element={<ExampleThree />} /> */}
          <Route path="/preview" element={<Preview />} />

        </Routes>
      </Router>

      <footer>
      </footer>
    </div>

  );
}

export default App;
