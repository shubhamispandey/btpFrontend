import React from "react";
import DashboardHeader from "./SubComponents/DashboardHeader/DashboardHeader";
import styles from "./DashboardComponent.module.css";
import DashboardBody from "./SubComponents/DashboardBody/DashboardBody";

const DashboardComponent = () => {
  return (
    <div className={styles.Wrapper}>
      <DashboardHeader />
      <DashboardBody />
    </div>
  );
};

export default DashboardComponent;
