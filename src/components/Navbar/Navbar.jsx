import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="header-nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/careers">Careers</Link>
      </li>
    </ul>
  );
}

export default Navbar;
