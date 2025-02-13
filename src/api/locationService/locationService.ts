import axiosInstance from "../axios";

// Типы для данных
interface Location {
  id: number;
  location: string;
}

// Функция для получения картинок
const getLocations = async (): Promise<Location[]> => {
  try {
    const response = await axiosInstance.get<Location[]>("/locations");
    return response.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};

export default getLocations;
