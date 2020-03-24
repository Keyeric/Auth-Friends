import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: window.localStorage.getItem("token")
    },
    baseURL: "https://localhost:5000"
  });
};
