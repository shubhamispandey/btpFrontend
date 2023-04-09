import React from "react";
import Header from "../../components/HomePage/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
    </div>
  );
};

export default HomePage;
