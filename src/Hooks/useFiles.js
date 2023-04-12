import { getFiles } from "../Services/File/getFiles";
import { downloadFile } from "../Services/File/downloadFile";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  setFiles,
  setFilesLoading,
  setFileDownloading,
} from "../Redux/Slices/Files";
import {
  generateFileFromChunks,
  reverseGenerateChunksData,
} from "../Utils/helper";

const useFiles = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.user);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const handleGetFiles = () => {
    dispatch(setFilesLoading(true));
    getFiles(headers, user.email)
      .then((response) => {
        dispatch(setFiles(response.data));
        setTimeout(() => dispatch(setFilesLoading(false)), 1000);
      })
      .catch((err) => {
        toast.error(err.message);
        setTimeout(() => dispatch(setFilesLoading(false)), 1000);
      });
  };

  const handleDownloadFile = async (fileId) => {
    try {
      dispatch(setFileDownloading(true));

      // 1.Network call
      const encryptedChunks = (await downloadFile(headers, fileId)).data
        .sort((a, b) => a.configurations.order - b.configurations.order)
        .map((chunk) => {
          return {
            encrypted: chunk.encrypted,
            hash: chunk.hash,
            order: chunk.configurations.order,
            fileName: chunk.configurations.fileName,
          };
        });

      // 2.Generate Chunks from encrypted data
      const chunks = await reverseGenerateChunksData(encryptedChunks);

      // 3.Generate file from chunks
      generateFileFromChunks(
        chunks.map((chunk) => chunk.chunks),
        chunks[0].fileName.replace(/.txt/g, "")
      );

      setTimeout(() => dispatch(setFilesLoading(false)), 1000);
    } catch (err) {
      toast.error(err.message);
      console.log(err);

      setTimeout(() => dispatch(setFilesLoading(false)), 1000);
    }
  };

  return { handleGetFiles, handleDownloadFile };
};

export default useFiles;
