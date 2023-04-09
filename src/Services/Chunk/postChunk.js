import axios from "axios";
const baseUrl = "http://localhost:3000/chunks";

export const postChunk = (data) => {
  const url = `${baseUrl}/upload`;
  console.log(data);
  return axios.post(url, data);
};
