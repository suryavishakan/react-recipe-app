import React from "react";

import { Link } from "react-router-dom";

// styles
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h3>Cooking Ninja</h3>
        </Link>
        <Link to="/create">Create recipe</Link>
      </nav>
    </header>
  );
};

export default Navbar;
