import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import rocket from "../../assets/images/rocket.png";
import { DashboardOutlined, Settings, StarRounded } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="navbar__logo">
        <span>Cloud</span>ice
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item active">
          <Link to={"/settings"}>
            <DashboardOutlined /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/favourite"}>
            <Settings /> Settings
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/settings"}>
            <StarRounded /> Favourites
          </Link>
        </li>
      </ul>
      <div className="sidebar-bottom">
        <div className="sidebar-bottom-img">
          <img src={rocket} alt="" />
        </div>
        <p>
          Continue to use <span>MLE</span> standard encryption
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
