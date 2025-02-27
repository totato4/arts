import React from "react";

import ReactPaginate from "react-paginate";
import { SearchParamsType } from "types";
import s from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  setSearchState: React.Dispatch<React.SetStateAction<SearchParamsType>>;
  totalPages: number;
}

const prevIcon = (
  <svg
    width="7.599609"
    height="11.800049"
    viewBox="0 0 7.59961 11.8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector "
      d="M7.48 0.18C7.31 -0.04 6.99 -0.07 6.78 0.11L0.18 5.51C0.06 5.6 0 5.75 0 5.9C0 6.04 0.06 6.19 0.18 6.28L6.78 11.68C6.99 11.86 7.31 11.83 7.48 11.61C7.66 11.4 7.62 11.08 7.41 10.91L1.28 5.9L7.41 0.88C7.62 0.71 7.66 0.39 7.48 0.18Z"
      fill="inherit"
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
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Vector "
      d="M0.11 0.18C0.28 -0.04 0.6 -0.07 0.81 0.11L7.41 5.51C7.53 5.6 7.59 5.75 7.59 5.9C7.59 6.04 7.53 6.19 7.41 6.28L0.81 11.68C0.6 11.86 0.28 11.83 0.11 11.61C-0.07 11.4 -0.04 11.08 0.18 10.91L6.31 5.9L0.18 0.88C-0.04 0.71 -0.07 0.39 0.11 0.18Z"
      fill="inherit"
      fillOpacity="1.000000"
      fillRule="evenodd"
    />
  </svg>
);

function Pagination({
  currentPage,
  setSearchState,
  totalPages,
}: PaginationProps) {
  // Вычисляем индексы для отображаемых элементов

  // Обработчик изменения страницы
  const handlePageClick = (selected: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page: selected + 1,
    }));
  };
  return (
    totalPages > 1 && (
      <div className={s.wrapper}>
        <ReactPaginate
          previousLabel={prevIcon}
          nextLabel={nextIcon}
          breakLabel={
            <div className={s.breakLable}>
              <svg
                width="10.215820"
                height="1.636719"
                viewBox="0 0 10.2158 1.63672"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="..."
                  d="M1.63 0.81C1.63 1.26 1.27 1.63 0.81 1.63C0.36 1.63 0 1.26 0 0.81C0 0.36 0.36 0 0.81 0C1.27 0 1.63 0.36 1.63 0.81ZM5.92 0.81C5.92 1.26 5.56 1.63 5.1 1.63C4.65 1.63 4.28 1.26 4.28 0.81C4.28 0.36 4.65 0 5.1 0C5.56 0 5.92 0.36 5.92 0.81ZM10.21 0.81C10.21 1.26 9.85 1.63 9.39 1.63C8.94 1.63 8.57 1.26 8.57 0.81C8.57 0.36 8.94 0 9.39 0C9.85 0 10.21 0.36 10.21 0.81Z"
                  fill="inherit"
                  fillOpacity="1.000000"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          }
          pageCount={totalPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={(selectedItem) =>
            handlePageClick(selectedItem.selected)
          }
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
    )
  );
}

export default Pagination;
