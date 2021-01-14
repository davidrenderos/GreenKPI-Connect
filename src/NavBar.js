import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const navStyle = {
    color: "black",
  };

  return (
    <nav>
      <Link to="/">
        <img src="logo-name.png" alt="Logo" className="logo"></img>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/teams" style={navStyle}>
            Teams
          </Link>
        </li>
        <li>
          <Link to="/messages" style={navStyle}>
            Messages
          </Link>
        </li>
        <li>
          <Link to="/live" style={navStyle}>
            Live
          </Link>
        </li>
      </ul>
      <Link to="/profile">
        <img src="profile.png" alt="profile" className="profile"></img>
      </Link>
    </nav>
  );
}

export default NavBar;
