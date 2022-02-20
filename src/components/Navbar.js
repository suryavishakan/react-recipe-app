import React from "react";
import { Link } from "react-router-dom";
// styles
import "./Navbar.css";
// components
import SearchBar from "./SearchBar";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { color } = useTheme();
  return (
    <header className="navbar" style={{ background: color }}>
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
