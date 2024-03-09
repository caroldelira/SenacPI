import axios, { AxiosError } from "axios";

const token = ""; // AsyncStorage.getItem("posweb.token");

const api = axios.create({
  baseURL: "https://listou-backend.vercel.app/",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        // useAuth().signOut();
      }
    }
    return Promise.reject(error);
  }
);

export const fetcher = (url) => api.get(url).then((res) => res.data);

export default api;
