import React from "react";
import { Link } from "react-router-dom";
// styles
import "./Navbar.css";
// components
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h3>Cooking Ninja</h3>
        </Link>
        <SearchBar />
        <Link to="/create">Create recipe</Link>
      </nav>
    </header>
  );
};

export default Navbar;
