import axios from "axios";

export const getAxiosInstance = () => {
  const token = localStorage.getItem("token") ?? "";
  return axios.create({
    baseURL: "https://magneto-warehouse.herokuapp.com",
  });
};
