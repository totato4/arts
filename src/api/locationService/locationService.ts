import { Author, Location } from "../../types/types";
import axiosInstance from "../axios";

// Типы для данных

// Функция для получения картинок
const getLocations = async (): Promise<Author[]> => {
  try {
    const { data } = await axiosInstance.get<Location[]>("/locations");
    const locationsNames = data.map(
      (item): Author => ({
        id: item.id,
        name: item.location,
      }),
    );
    return locationsNames;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};

export default getLocations;
