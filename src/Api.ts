import axios, { AxiosInstance } from "axios";

const apis = {
  APOD: "planetary/apod",
};

const api: AxiosInstance = axios.create({
  baseURL: "https://api.nasa.gov/",
});

const api_key = process.env.REACT_APP_APIKEY;

export const getAPOD = async () => {
  return await api.get(apis.APOD, {
    params: {
      api_key,
    },
  });
};
