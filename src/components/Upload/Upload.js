import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import { FileUploadOutlined } from "@mui/icons-material";
import {
  generateChunks,
  generateChunksData,
  readFile,
} from "../../Utils/helper";
import useChunks from "../../Hooks/useChunks";
import styles from "./Upload.module.css";
import { useSelector } from "react-redux";

const Upload = () => {
  const { handleGetHash } = useChunks();
  const user = useSelector((state) => state.user.user);

  // !UPLOAD THE CHUNKS TO SERVER
  const uploadChunks = (chunks) => {
    const uniqueFileId = uuidv4();
    chunks.forEach((chunk, id) => {
      const chunkData = {
        email: user.email,
        hash: chunk.hash,
        order: chunk.order,
        users: [user._id],
        encrypted: chunk.encrypted,
        configurations: new Map([
          [
            uniqueFileId,
            {
              email: user.email,
              order: chunk.order,
            },
          ],
        ]),
      };
      console.log(chunkData);
      handleGetHash(chunkData);
    });
  };

  // !ON CLICK OF UPLOAD DATA BUTTON
  const handleUploadBtnClick = async (e) => {
    // 1. Select the file
    const file = e.target.files[0];

    if (!file) {
      alert("Please select a file.");
      return;
    }

    // 2.Convert the file into chunks of size 1mb
    const chunks = await generateChunks(file);

    // 3. a.Read the contents of the chunks EG:[chunk1, chunk2,...]
    //    b.Convert array of chunks into [{ content, hash, encrypted, decrypted },...]
    const contents = await generateChunksData(chunks);

    // 4. Send the chunks to the server
    uploadChunks(contents);
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
