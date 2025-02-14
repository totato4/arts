import React from "react";

import ReactPaginate from "react-paginate";
import { FilterParamsType } from "../../types";
import s from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  setFilterParams: React.Dispatch<React.SetStateAction<FilterParamsType>>;
  totalPages: number;
}

const prevIcon = (
  <svg
    width="7.599609"
    height="11.800049"
    viewBox="0 0 7.59961 11.8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector "
      d="M7.48 0.18C7.31 -0.04 6.99 -0.07 6.78 0.11L0.18 5.51C0.06 5.6 0 5.75 0 5.89C0 6.05 0.06 6.19 0.18 6.28L6.78 11.68C6.99 11.86 7.31 11.83 7.48 11.61C7.66 11.4 7.62 11.08 7.41 10.91L1.28 5.89L7.41 0.88C7.62 0.71 7.66 0.39 7.48 0.18Z"
      fill="#575757"
      fillOpacity="1.000000"
      fillRule="evenodd"
    />
  </svg>
);

const nextIcon = (
  <svg
    width="7.599609"
    height="11.800049"
    viewBox="0 0 7.59961 11.8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector "
      d="M0.11 0.18C0.28 -0.04 0.6 -0.07 0.81 0.11L7.41 5.51C7.53 5.6 7.59 5.75 7.59 5.89C7.59 6.05 7.53 6.19 7.41 6.28L0.81 11.68C0.6 11.86 0.28 11.83 0.11 11.61C-0.07 11.4 -0.04 11.08 0.18 10.91L6.31 5.89L0.18 0.88C-0.04 0.71 -0.07 0.39 0.11 0.18Z"
      fill="#575757"
      fillOpacity="1.000000"
      fillRule="evenodd"
    />
  </svg>
);

function Pagination({
  currentPage,
  setFilterParams,
  totalPages,
}: PaginationProps) {
  // Вычисляем индексы для отображаемых элементов

  // Обработчик изменения страницы
  const handlePageClick = (selected: number) => {
    setFilterParams((prevState) => ({
      ...prevState,
      page: selected + 1,
    }));
    console.log(selected + 1);
  };
  return (
    <div className={s.wrapper}>
      <ReactPaginate
        previousLabel={prevIcon}
        nextLabel={nextIcon}
        breakLabel="..."
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={(selectedItem) => handlePageClick(selectedItem.selected)}
        initialPage={Number(currentPage) - 1}
        forcePage={Number(currentPage) - 1}
        renderOnZeroPageCount={null}
        containerClassName={s.pagination}
        pageClassName={s.pageItem}
        pageLinkClassName={s.pageLink}
        activeClassName={s.active}
        previousClassName={s.pageItem}
        nextClassName={s.pageItem}
        previousLinkClassName={s.prev}
        nextLinkClassName={s.next}
        disabledClassName={s.disabled}
      />
    </div>
  );
}

export default Pagination;
