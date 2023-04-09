import React from "react";
import { CircularProgress } from "@mui/material";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loader">
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loading;
