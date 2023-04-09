import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./components/Loading/Loading";
import PopUpCenter from "./components/Popup/PopupCenter";
import HomePage from "./container/Homepage/HomePage";
import Sign from "./container/Sign/Sign";
import Dashboard from "./container/Dashboard/Dashboard";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import useAuth from "./Hooks/useAuth";
import "react-toastify/ReactToastify.min.css";

const App = () => {
  const { handleInit } = useAuth();
  const { popupOpen, popupCenterComponent } = useSelector(
    (state) => state.popup
  );
  const [isAppInitialized, setIsAppInitialized] = useState(false);

  useEffect(() => {
    handleInit();
    setIsAppInitialized(true);
  }, []);

  return isAppInitialized ? (
    <div>
      <ToastContainer position="top-right" newestOnTop />
      <PopUpCenter ContentComp={popupCenterComponent} isOpen={popupOpen} />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/sign/:page" element={<Sign />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  ) : (
    <Loading />
  );
};

export default App;
