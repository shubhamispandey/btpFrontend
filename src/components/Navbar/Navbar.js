import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <span>Cloud</span>ice
      </div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="/">Features</a>
        </li>
        <li className="navbar__link">
          <a href="/">Overview</a>
        </li>
        <li className="navbar__link">
          <a href="/">Reviews</a>
        </li>
      </ul>
      <Link to="/sign/signup" className="btn-round navbar-btn">
        <span>Get Started</span> <ArrowOutwardIcon />
      </Link>
    </div>
  );
};

export default Navbar;
