import { createSelector } from "@reduxjs/toolkit";
import { artDataQuery } from "./artDataQuery";

// Селектор для данных карточек
const selectCards = createSelector(
  artDataQuery.endpoints.getPicture.select(), // Входной селектор
  (cardsResult) => cardsResult.data || [], // Функция преобразования
);

export default selectCards;
