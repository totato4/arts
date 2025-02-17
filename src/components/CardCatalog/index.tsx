/* eslint-disable no-underscore-dangle */
import { useState } from "react";
import { useGetPictureQuery } from "../../Redux/artDataQuery/artDataQuery";
import { Picture } from "../../Redux/artDataQuery/types";

import Card from "../Card";
import CardList from "../CardList";
import FilterSidebar from "../FilterSidebar";
import Pagination from "../Pagination";
import SearchInput from "../SearchInput";

import { FilterParamsType } from "../../types";
import s from "./CardCatalog.module.scss";

function CardCatalog() {
  const [filterParams, setFilterParams] = useState<FilterParamsType>({
    q: "",
    locationId: undefined,
    authorId: undefined,
    created_gte: "",
    created_lte: "",
    page: 1,
    limit: 6,
  });
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  const { data, isSuccess } = useGetPictureQuery(filterParams);

  return (
    <>
      <div className={s.filterWrapper}>
        <FilterSidebar
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
          setFilterParams={setFilterParams}
        />
        <SearchInput setFilterParams={setFilterParams} />
        <button
          aria-label="open filter menu"
          type="button"
          className={s.filterBtn}
          onClick={() => setSidebarIsOpen(true)}
        >
          <svg
            className={s.filterBtnIcon}
            width="15.908203"
            height="13.000000"
            viewBox="0 0 15.9082 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M14.2 0C13.29 0 12.7 0.5 12.5 1.19L0.59 1.19Q0.29 1.19 0.15 1.34Q0 1.5 0 1.8Q0 2.09 0.15 2.25Q0.29 2.4 0.59 2.4L12.4 2.4C12.59 3.09 13.4 3.59 14.09 3.59C15.09 3.59 15.9 2.8 15.9 1.8C16 0.8 15.09 0 14.2 0ZM14.2 2.4Q13.9 2.4 13.75 2.25Q13.59 2.09 13.59 1.8Q13.59 1.5 13.75 1.34Q13.9 1.19 14.2 1.19Q14.5 1.19 14.65 1.34Q14.79 1.5 14.79 1.8C14.79 2.19 14.5 2.4 14.2 2.4ZM14.2 5.9L7.29 5.9C7 5.2 6.4 4.69 5.5 4.69C4.59 4.69 4 5.2 3.79 5.9L0.59 5.9Q0.29 5.9 0.15 6.05Q0 6.2 0 6.5Q0 6.8 0.15 6.95Q0.29 7.09 0.59 7.09L3.79 7.09C4 7.8 4.79 8.3 5.5 8.3C6.2 8.3 7 7.8 7.29 7.09L14.2 7.09Q14.5 7.09 14.65 6.95Q14.79 6.8 14.79 6.5C14.79 6.09 14.5 5.9 14.2 5.9ZM5.5 7.09C5.2 7.09 4.9 6.9 4.9 6.5Q4.9 6.19 5.04 6.05Q5.2 5.9 5.5 5.9Q5.79 5.9 5.95 6.05Q6.09 6.2 6.09 6.5Q6.09 6.8 5.95 6.95Q5.79 7.09 5.5 7.09ZM12.2 10.6L14.2 10.6C14.5 10.6 14.79 10.9 14.7 11.2Q14.7 11.5 14.54 11.65Q14.4 11.8 14.09 11.8L12.09 11.8C11.9 12.5 11.09 13 10.4 13C9.7 13 8.9 12.5 8.7 11.8L0.59 11.8Q0.29 11.8 0.15 11.65Q0 11.5 0 11.2Q0 10.9 0.15 10.75Q0.29 10.6 0.59 10.6L8.79 10.6C9 9.9 9.59 9.4 10.5 9.4C11.29 9.4 12 9.9 12.2 10.6ZM10.04 11.65Q10.2 11.8 10.5 11.8C10.79 11.8 11.09 11.6 11.09 11.2Q11.09 10.9 10.95 10.75Q10.79 10.6 10.5 10.6C10.09 10.6 9.9 10.8 9.9 11.2Q9.9 11.5 10.04 11.65Z"
              fill="inherit"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <CardList>
        {isSuccess &&
          data?.data.map((obj: Picture) => (
            <Card
              authorId={obj.authorId}
              created={obj.created}
              imageUrl={obj.imageUrl}
              locationId={obj.locationId}
              name={obj.name}
              key={`${obj.id}`}
            />
          ))}
      </CardList>
      <Pagination
        setFilterParams={setFilterParams}
        currentPage={filterParams.page}
        totalPages={data?.totalPages || 0}
      />
    </>
  );
}

export default CardCatalog;
