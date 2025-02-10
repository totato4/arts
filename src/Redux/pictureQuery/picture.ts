// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilterParamsType } from "../../types";
import type { Picture } from "./types";

// Define a service using a base URL and expected endpoints
export const picturesApi = createApi({
  reducerPath: "pictureApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-front.framework.team/paintings",
  }),
  endpoints: (builder) => ({
    getPicture: builder.query<
      { data: Picture[]; totalPages: number },
      FilterParamsType
    >({
      query: ({
        limit,
        page,
        authorId,
        created_gte,
        created_lte,
        locationId,
        name,
      }) => {
        // Создаем объект с параметрами, исключая пустые значения
        const params = {
          ...(limit && { _limit: limit }),
          ...(page && { _page: page }),
          ...(authorId && { authorId }),
          ...(created_gte && { created_gte }),
          ...(created_lte && { created_lte }),
          ...(locationId && { locationId }),
          ...(name && { name }),
        };

        // Преобразуем объект в строку запроса
        const searchParams = new URLSearchParams(params).toString();

        // Заменяем "+" на "%20" для корректного кодирования пробелов
        const correctedSearchParams = searchParams.replace(/\+/g, "%20");

        console.log(correctedSearchParams); // Для отладки

        // Возвращаем строку запроса с "?" в начале
        return `?${correctedSearchParams}`;

        // return `https://test-front.framework.team/paintings?${pageLink}${authorLink}${locationLink}${qLink}${gteLink}${lteLink}`;

        // const filteredParams = Object.fromEntries(
        //   Object.entries(param).filter((entry) => entry[1] !== ""),
        // );

        // const searchParams = new URLSearchParams({
        //   ...filteredParams,
        // }).toString();
        // console.log(searchParams);
        // return `?${searchParams}`;
      },
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
