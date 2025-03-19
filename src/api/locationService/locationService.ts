import { Location } from "../../types/types";
import axiosInstance from "../axios";

const getLocations = async (): Promise<Location[]> => {
  const response = await axiosInstance.get<Location[]>("/locations");
  return response.data;
};

export default getLocations;
