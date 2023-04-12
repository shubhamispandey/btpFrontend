import axios from "axios";
import { baseUrl } from "../../Utils/constants";

export const getFiles = (headers, email) => {
  const url = `${baseUrl}/api/files/get-files/${email}`;
  return axios.get(url, { headers });
};
