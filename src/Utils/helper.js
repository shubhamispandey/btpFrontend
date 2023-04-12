import { AES, enc } from "crypto-js";
import sha256 from "sha256";

// ! 1.GENERATE CHUNKS OF A FILE
export const generateChunks = (file) =>
  new Promise((resolve, reject) => {
    const chunkSize = 1024 * 1024; // 1 MB
    const fileSize = file.size;
    const chunks = Math.ceil(fileSize / chunkSize);
    const fileReader = new FileReader();
    let currentChunk = 0;
    const bufferArray = [];

    fileReader.onload = (event) => {
      bufferArray.push(event.target.result);
      currentChunk++;

      if (currentChunk < chunks) {
        loadNextChunk();
      } else {
        resolve(bufferArray);
      }
    };

    fileReader.onerror = (event) => {
      reject(event.target.error);
    };

    const loadNextChunk = () => {
      const start = currentChunk * chunkSize;
      const end = Math.min(start + chunkSize, fileSize);
      const chunk = file.slice(start, end);
      fileReader.readAsArrayBuffer(chunk);
    };

    loadNextChunk();
  });

//! 2.GENERATE FILE FROM CHUNKS
export const generateFileFromChunks = (chunks, filename) => {
  const blob = new Blob(chunks);
  const file = new File([blob], `${filename}.txt`, { type: "text/plain" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = file.name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// ! 3.GENERATE { content, hash, encrypted, decrypted } WITH EACH CHUNK
export const generateChunksData = (chunks) => {
  const promises = [];
  for (let i = 0; i < chunks.length; i++) {
    const promise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result;
        const hash = sha256(content);
        const encrypted = AES.encrypt(content, hash).toString();
        const decrypted = AES.decrypt(encrypted, hash).toString(enc.Utf8);
        // return 1.Content, 2.Hash of Content, 3.Encrypted Content, 4.Decrypted Content
        resolve({
          order: i + 1,
          content,
          hash,
          encrypted,
          decrypted,
        });
      };
      // read the content
      reader.readAsText(new Blob([chunks[i]]));
    });
    promises.push(promise);
  }
  return Promise.all(promises);
};

// ! 4.GENERATE Chunks from { content, hash, encrypted, decrypted }
export const reverseGenerateChunksData = (encryptedChunks) => {
  const promises = [];
  for (let i = 0; i < encryptedChunks.length; i++) {
    const promise = new Promise((resolve) => {
      const { encrypted, hash, order, fileName } = encryptedChunks[i];
      const decrypted = AES.decrypt(encrypted, hash).toString(enc.Utf8);
      resolve({
        order,
        chunks: new Blob([decrypted]),
        fileName,
      });
    });
    promises.push(promise);
  }
  return Promise.all(promises);
};
