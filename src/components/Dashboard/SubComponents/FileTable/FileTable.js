import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { DeleteOutline, FileDownloadOutlined } from "@mui/icons-material";
import useFiles from "../../../../Hooks/useFiles";
import styles from "./FileTable.module.css";

const FileTable = () => {
  const { handleGetFiles, handleDownloadFile } = useFiles();
  const { files } = useSelector((state) => state.files);

  useEffect(handleGetFiles, []);

  return files.length ? (
    <div className={styles.Wrapper}>
      <div className={styles.Table}>
        <div className={styles.Row}>
          <div className={styles.Column}>FILE NAME</div>
          <div className={styles.Column}>DELETE</div>
          <div className={styles.Column}>DOWNLOAD</div>
        </div>
        {files.map((file) => (
          <div className={styles.Row} key={file.uniqueFileId}>
            <div className={styles.Column}>{file.fileName}</div>
            <div className={styles.Column}>
              <IconButton
                aria-label="delete"
                className={styles.BtnSvg}
                onClick={() => {}}
              >
                <DeleteOutline />
              </IconButton>
            </div>
            <div className={styles.Column}>
              <IconButton
                aria-label="delete"
                className={styles.BtnSvg}
                onClick={() => handleDownloadFile(file.uniqueFileId)}
              >
                <FileDownloadOutlined />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>No Files Uploaded</h1>
  );
};

export default FileTable;
