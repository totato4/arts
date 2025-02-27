// Need to use the React-specific entry point to import createApi
import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import { SearchParamsType } from "types";
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
      SearchParamsType
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
      transformResponse: (
        baseQueryReturnValue: Picture[], // Сервер возвращает массив картинок напрямую
        meta: FetchBaseQueryMeta | undefined,
        arg: SearchParamsType, // Параметры запроса
      ) => {
        const totalCount = parseInt(
          meta?.response?.headers.get("X-Total-Count") || "0",
          10,
        );

        // Используем limit из аргументов запроса (должен быть обязательным в SearchParamsType)
        const totalPages = Math.ceil(totalCount / (arg.limit || 6)); // fallback на 6 если limit не указан
        return {
          data: baseQueryReturnValue,
          totalPages,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPictureQuery, useGetAuthorQuery, useGetLocationQuery } =
  artDataQuery;
