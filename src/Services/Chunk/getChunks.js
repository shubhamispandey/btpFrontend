import axios from "axios";
import { baseUrl } from "../../Utils/constants";

export const getChunks = (headers) => {
  const url = `${baseUrl}/api/files`;
  return axios.get(url, { headers });
};
