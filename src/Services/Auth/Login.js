import axios from "axios";
import { baseUrl } from "../../Utils/constants";

export const login = (data) => {
  const url = `${baseUrl}/api/auth/login`;
  return axios.post(url, data);
};
