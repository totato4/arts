// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilterParamsType } from "../../types";
import type { Author, Location, Picture } from "./types";

// Define a service using a base URL and expected endpoints
export const artDataQuery = createApi({
  reducerPath: "artDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-front.framework.team/",
  }),
  endpoints: (builder) => ({
    getAuthor: builder.query<Author[], number>({
      query: (authorId) => {
        // Возвращаем строку запроса с "?" в начале
        return `authors?id=${authorId}`;
      },
    }),
    getLocation: builder.query<Location[], number>({
      query: (locationId) => {
        // Возвращаем строку запроса с "?" в начале
        return `locations?id=${locationId}`;
      },
    }),
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
        q,
      }) => {
        // Создаем объект с параметрами, исключая пустые значения
        const params = {
          ...(limit && { _limit: limit }),
          ...(page && { _page: page.toString() }),
          ...(authorId && { authorId }),
          ...(created_gte && { created_gte }),
          ...(created_lte && { created_lte }),
          ...(locationId && { locationId }),
          ...(q && { q }),
        };

        const stringParams = Object.fromEntries(
          Object.entries(params).map(([key, value]) => [key, String(value)]),
        );
        // Преобразуем объект в строку запроса
        const searchParams = new URLSearchParams(stringParams).toString();

        // Заменяем "+" на "%20" для корректного кодирования пробелов
        const correctedSearchParams = searchParams.replace(/\+/g, "%20");
        // .replace(/%2C/g, ",");

        console.log(correctedSearchParams); // Для отладки

        // Возвращаем строку запроса с "?" в начале
        return `paintings?${correctedSearchParams}`;
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
export const { useGetPictureQuery, useGetAuthorQuery, useGetLocationQuery } =
  artDataQuery;
