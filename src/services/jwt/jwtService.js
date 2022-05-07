import axios from "axios";
import t4Api from "../configs/t4Api";

axios.interceptors.request.use((config) => {
  const accessToken = getToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export const getToken = () => {
  return localStorage.getItem("accessToken");
};

export const login = (params) => {
  return t4Api.login(params);
};
