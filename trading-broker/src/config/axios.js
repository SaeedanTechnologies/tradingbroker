import axios from "axios";

const client = axios.create({
  baseURL: "https://tradingbackend.saeedantechpvt.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
console.log(import.meta.env.VITE_TRADING_BASE_URL);
client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
