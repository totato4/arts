import axiosInstance from "../axios";

interface Author {
  id: number;
  name: string;
}

const getAuthors = async (): Promise<Author[]> => {
  const response = await axiosInstance.get<Author[]>("/authors");
  return response.data;
};

export default getAuthors;
