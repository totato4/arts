import axios from "axios";

const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL || "https://test-front.framework.team";

const axiosInstance = axios.create({
  baseURL: apiBaseUrl, // Базовый URL вашего API
  timeout: 10000, // Таймаут запроса
  headers: {
    "Content-Type": "application/json", // Заголовки по умолчанию
  },
});

export default axiosInstance;
