import axios from "axios";
import { baseUrl } from "../../Utils/constants";

export const signup = (data) => {
  const url = `${baseUrl}/api/auth/register/`;
  return axios.post(url, data);
};
