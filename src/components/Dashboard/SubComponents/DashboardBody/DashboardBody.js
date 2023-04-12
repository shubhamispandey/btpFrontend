import React from "react";
import { useSelector } from "react-redux";
import useFiles from "../../../../Hooks/useFiles";
import FileTable from "../FileTable/FileTable";
import { LoopOutlined } from "@mui/icons-material";
import styles from "./DashboardBody.module.css";
import DownloadAlert from "../DownloadAlert/DownloadAlert";

const DashboardBody = () => {
  const { handleGetFiles } = useFiles();
  const { loading } = useSelector((state) => state.files);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.DashboardBodyTop}>
        <button onClick={handleGetFiles} className={styles.RefreshButton}>
          <LoopOutlined
            className={loading ? styles.RefreshButtonSvgRevolve : ""}
          />
        </button>
      </div>
      <FileTable />
      <DownloadAlert />
    </div>
  );
};

export default DashboardBody;
