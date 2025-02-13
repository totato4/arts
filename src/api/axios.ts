import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://test-front.framework.team", // Базовый URL вашего API
  timeout: 10000, // Таймаут запроса
  headers: {
    "Content-Type": "application/json", // Заголовки по умолчанию
  },
});

export default axiosInstance;
