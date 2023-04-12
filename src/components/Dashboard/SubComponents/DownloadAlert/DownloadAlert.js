import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFileDownloading } from "../../../../Redux/Slices/Files";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { FileDownloadOutlined } from "@mui/icons-material";
import styles from "./DownloadAlert.module.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />;
});

const DownloadAlert = ({ downloa }) => {
  const { downloading } = useSelector((state) => state.files);
  const dispatch = useDispatch();
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={downloading}
      onClose={() => dispatch(setFileDownloading(false))}
    >
      <Alert
        icon={<FileDownloadOutlined className={styles.Icon} fontSize="2rem" />}
        severity="warning"
        sx={{
          width: "100%",
          fontSize: "1.6rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        Downloading
      </Alert>
    </Snackbar>
  );
};

export default DownloadAlert;
