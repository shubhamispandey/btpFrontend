import axios from "axios";
const baseUrl = "http://localhost:3000/chunks";

export const getHash = (data) => {
  const url = `${baseUrl}/hash`;
  console.log(data);
  return axios.post(url, data);
};
