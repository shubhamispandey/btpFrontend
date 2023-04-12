import axios from "axios";
import { baseUrl } from "../../Utils/constants";

export const downloadFile = (headers, id) => {
  const url = `${baseUrl}/api/files/download/${id}`;
  return axios.get(url, { headers });
};
