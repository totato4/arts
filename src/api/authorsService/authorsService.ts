import axiosInstance from "../axios";

// Типы для данных
interface Author {
  id: number;
  name: string;
}

// Функция для получения картинок
const getAuthors = async (): Promise<Author[]> => {
  try {
    const response = await axiosInstance.get<Author[]>("/authors");
    return response.data;
  } catch (error) {
    console.error("Error fetching pictures:", error);
    throw error;
  }
};

export default getAuthors;
