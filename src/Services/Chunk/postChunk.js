import axios from "axios";
import { baseUrl } from "../../Utils/constants";

export const postChunk = (data, headers) => {
  const url = `${baseUrl}/api/files/upload`;
  console.log(data);
  return axios.post(url, data, { headers });
};
