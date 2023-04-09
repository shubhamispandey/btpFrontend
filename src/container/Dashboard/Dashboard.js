import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardComponent from "../../components/Dashboard/DashboardComponent";

const Dashboard = () => {
  return (
    <div className={styles.Wrapper}>
      <Sidebar />
      <DashboardComponent />
    </div>
  );
};

export default Dashboard;
