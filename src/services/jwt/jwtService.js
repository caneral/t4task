import { api } from "../../configs/api";
import t4Api from "../../configs/t4Api";

const requestHandler = (request) => {
  const accessToken = getToken();
  if (accessToken) {
      console.log("first")
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  return request;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

api.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { config, response } = error;
    if (response && response.status === 401) {
      console.log("Caner Al");

      clearLocalStorage();
    }
    return Promise.reject(error);
  }
);

export const getToken = () => {
  return localStorage.getItem("accessToken");
};

export const login = (params) => {
  return t4Api.login(params);
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};
