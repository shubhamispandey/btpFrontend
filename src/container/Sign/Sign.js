import React from "react";
import { useParams } from "react-router-dom";
import SignSlider from "../../components/SignSlider/SignSlider";
import Login from "../../components/Sign/Login/Login";
import Signup from "../../components/Sign/Signup/Signup";
import "./Sign.css";

const Sign = () => {
  const { page } = useParams();
  return (
    <div className="sign">
      <div className="sign__left">
        <div className="navbar__logo" style={{ color: "#fff" }}>
          Cloudice
        </div>
        <div className="sign__left--desc">
          <h2>Start your journey with us.</h2>
          <p>Discover the first time ever encryption standard with MLE</p>
        </div>
        <div className="sign__slider">
          <SignSlider />
        </div>
      </div>
      <div className="sign__right">
        {page === "login" ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default Sign;
