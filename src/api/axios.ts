import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Базовый URL вашего API
  timeout: 10000, // Таймаут запроса
  headers: {
    "Content-Type": "application/json", // Заголовки по умолчанию
  },
});

export default axiosInstance;
