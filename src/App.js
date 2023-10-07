import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newsletters from "./components/pages/Newsletters";
import Home from "./components/pages/Home";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/pages/About";
import Events from "./components/pages/Events";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Expectations from "./components/pages/Expectations";


// import ClassroomEvents from "./components/pages/ClassroomEvents";

// Define your classroomEvents data here

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Newsletters" element={<Newsletters />} />
          <Route path="/About" element={<About />} />
          <Route path="/Expectations" element={<Expectations />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
