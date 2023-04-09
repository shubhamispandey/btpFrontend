import React from "react";
import styles from "./DashboardBody.module.css";
import EnhancedTable from "../../../Datatable/Datatable";

const DashboardBody = () => {
  return (
    <div className={styles.Wrapper}>
      <EnhancedTable />
    </div>
  );
};

export default DashboardBody;
