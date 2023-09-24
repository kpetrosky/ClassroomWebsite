// src/components/Navbar.js
import React from "react";
import "./NavBar.css"; // Use the correct file name with a capital 'N'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>
        <li className="navbar-item">
          <a href="/newsletters">Newsletters</a>
        </li>
        <li className="navbar-item">
          <a href="/project">Project</a>
        </li>
        <li className="navbar-item">
          <a href="/events">Events</a>
        </li>
        <li className="navbar-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
