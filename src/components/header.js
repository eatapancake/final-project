import React from "react";
import { Link } from "react-router-dom";
import header from "../CSS/header.css";

function Header() {
  return (
    <header className="header">
      <span className="header__logo" role="img" aria-label="Logo">
        🥞My Recipe Book🥞
      </span>
      <nav className="header__nav">
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
