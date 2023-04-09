import React, { useState } from "react";
import { Button } from "@mui/material";
import { FileUploadOutlined } from "@mui/icons-material";
import {
  generateChunks,
  generateChunksData,
  readFile,
} from "../../Utils/helper";
import useChunks from "../../Hooks/useChunks";
import usePopup from "../../Hooks/usePopup";
import styles from "./Upload.module.css";
import { useSelector } from "react-redux";

const Upload = () => {
  const [file, setFile] = useState(null);
  const { handleGetChunks, handleGetHash } = useChunks();
  const { handlePopupOpen, handlePopupCenterComponentRender } = usePopup();
  const user = useSelector((state) => state.user.user);

  // !UPLOAD THE CHUNKS TO SERVER
  const uploadChunks = (chunks) => {
    chunks.forEach((chunk, id) => {
      console.log(chunk);
      const chunkData = {
        hash: chunk.hash,
        order: chunk.order,
        users: [user._id],
        encrypted: chunk.encrypted,
      };
      const response = handleGetHash(chunkData);
      // console.log(chunkData);
    });
  };

  // !ON CLICK OF UPLOAD DATA BUTTON
  const handleUploadBtnClick = async (e) => {
    // 1. Select the file
    const file = e.target.files[0];
    // setFile(myFile);

    // 1. Select the file
    if (!file) {
      alert("Please select a file.");
      return;
    }

    // 2.Convert the file into chunks of size 1mb
    const chunks = await generateChunks(file);

    // 3. a.Read the contents of the chunks EG:[chunk1, chunk2,...]
    //    b.Convert array of chunks into [{ content, hash, encrypted, decrypted },...]
    const contents = await generateChunksData(chunks);
    console.log(contents);

    // 4. Send the chunks to the server
    uploadChunks(contents);
  };

  // !ON CHANGE OF UPLOAD DATA
  const handleChange = async (e) => {
    // 1. Select the file
    const myFile = e.target.files[0];
    setFile(myFile);

    // 2. Load the content of File
    const content = await readFile(myFile);
    handlePopupOpen(true);
    handlePopupCenterComponentRender(content);
  };

  return (
    <Button variant="outlined" component="label" className={styles.Button}>
      <FileUploadOutlined className={styles.Svg} />
      Upload
      <input hidden accept=".txt" type="file" onChange={handleUploadBtnClick} />
    </Button>
  );
};

export default Upload;
