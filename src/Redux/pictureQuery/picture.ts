// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Picture } from "./types";

// Define a service using a base URL and expected endpoints
export const picturesApi = createApi({
  reducerPath: "pictureApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-front.framework.team/paintings",
  }),
  endpoints: (builder) => ({
    getPicture: builder.query<{ data: Picture[]; totalPages: number }, string>({
      query: (param) => `?${param}`,
      transformResponse: (response: Picture[], meta) => {
        // Извлекаем заголовок X-Total-Count из meta
        const totalCount = parseInt(
          meta?.response?.headers.get("X-Total-Count") || "0",
          10,
        );
        const totalPages = Math.ceil(totalCount / 6); // Вычисляем общее количество страниц
        return { data: response, totalPages };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPictureQuery } = picturesApi;
