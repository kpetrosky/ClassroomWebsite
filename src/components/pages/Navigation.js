// src/components/Navigation.js

import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/newsletters">Newsletters</Link>
        </li>
        {/* Add more navigation links */}
      </ul>
    </nav>
  );
};

export default Navigation;
