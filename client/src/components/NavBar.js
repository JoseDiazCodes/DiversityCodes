import React from "react";
import { Link } from "react-router-dom"; // need to install : npm install react-router-dom


const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="logo-container">
    <img src="/favicon.png" alt="Logo" className="logo" />
    </div>
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
      </ul>
    </nav>
  );
};

export default Navbar;
