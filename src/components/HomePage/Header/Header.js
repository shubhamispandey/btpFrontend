import React from "react";
import { Link } from "react-router-dom";
import { LoginOutlined } from "@mui/icons-material";
import headerImg from "../../../assets/images/homeHeader.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__desc">
        <span>Secure Cloud Platform</span>
        <h2>Manage Your Cloud File Securely with Cloudice</h2>
        <p>The most essential productivity tool. Store, Work, Share</p>
        <div className="header__btns">
          <Link to={"/sign/login"}>
            <button className="btn-round btn-login">
              <span>Login</span> <LoginOutlined />
            </button>
          </Link>
          <Link to={"/sign/signup"}>
            <button className="btn-round btn-start">
              <span>Get Started</span>
            </button>
          </Link>
        </div>
        {/* <span>Scroll Down </span> */}
      </div>
      <div className="header__img">
        <img src={headerImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
