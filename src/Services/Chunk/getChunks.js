import axios from "axios";
const baseUrl = "http://localhost:3000/chunks";

export const getChunks = () => {
  const url = `${baseUrl}/`;
  return axios.get(url);
};
