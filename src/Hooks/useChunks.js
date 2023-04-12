import { getHash } from "../Services/Chunk/getHash";
import { toast } from "react-toastify";
import { postChunk } from "../Services/Chunk/postChunk";
import { useSelector } from "react-redux";

const useChunks = () => {
  const token = useSelector((state) => state.auth.token);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const handleGetHash = (data) => {
    return getHash(data, headers)
      .then((response) => {
        toast.success("Hash already Present");
        console.log(response.data);
        return response;
      })
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(err.response.data);
          toast.error(err.response.data.message);
          handlePostChunk(data);
        } else if (err.request) {
          // The request was made but no response was received
          console.log(err.request);
          toast.error("No response received from server");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", err.message);
          toast.error(err.message);
        }
      });
  };

  const handlePostChunk = (data) => {
    postChunk(data, headers)
      .then((response) => {
        toast.success("Chunk Upload Success");
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(
          err?.response?.data?.message
            ? err?.response?.data?.message
            : "Upload Failed"
        );
      });
  };

  return { handleGetHash, handlePostChunk };
};

export default useChunks;
