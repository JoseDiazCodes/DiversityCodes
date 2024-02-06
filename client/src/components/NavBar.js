import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/detail" className="nav-link">
            Detail
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
