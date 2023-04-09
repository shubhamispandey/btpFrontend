import axios from "axios";
import { baseUrl } from "../../Utils/constants";

export const getHash = (data, headers) => {
  const url = `${baseUrl}/api/files/check-hash`;
  return axios.post(url, data, { headers });
};
