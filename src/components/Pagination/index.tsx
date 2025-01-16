import ReactPaginate from "react-paginate";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  ItemsPerPage: number;
  dataLength: number;
}

function Pagination({
  currentPage,
  setCurrentPage,
  ItemsPerPage,
  dataLength,
}: PaginationProps) {
  // Вычисляем индексы для отображаемых элементов

  // Обработчик изменения страницы
  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };
  return (
    <div>
      {currentPage}
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        pageCount={Math.ceil(dataLength / ItemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default Pagination;
