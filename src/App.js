// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newsletters from "./components/pages/Newsletters";
import Home from "./components/pages/Home";
import Navbar from "./components/NavBar"; // Update the import path for Navbar
import Header from './components/Header'
import Events from "./components/Events";
import EventList from "./components/pages/EventsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar /> {/* Include the Navbar directly in your layout */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Eventlists" element={<EventList />} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
