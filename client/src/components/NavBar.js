import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <nav className="navbar">
      <header>
        <div className="logo-container">
          <img src="/favicon.png" alt="Logo" className="logo" />
        </div>
        <nav ref={navRef}>
          <Link to="/" onClick={showNavBar}>Home</Link>
          <Link to="/admin" onClick={showNavBar}>Admin</Link>
          <Link to="/exam" onClick={showNavBar}>Exams</Link>
          <button className="nav-btn nav-close-button" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </nav>
  );
};

export default Navbar;
