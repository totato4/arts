/* eslint-disable no-underscore-dangle */
import { useState } from "react";
import { useGetPictureQuery } from "../../Redux/pictureQuery/picture";
import { Picture } from "../../Redux/pictureQuery/types";

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
    locationId: "",
    authorId: "",
    created_gte: "",
    created_lte: "",
    page: 1,
    limit: "6",
  });
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  const { data, isSuccess } = useGetPictureQuery(filterParams);

  const updateParam = (name: string, value: string | number) => {
    setFilterParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <div className={s.filterWrapper}>
        <FilterSidebar
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
          setFilterParams={setFilterParams}
        />
        <SearchInput value={filterParams.q} updateParam={updateParam} />
        <button
          aria-label="open filter menu"
          type="button"
          className={s.filterBtn}
          onClick={() => setSidebarIsOpen(true)}
        >
          <svg
            width="20.000000"
            height="20.000000"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip3343_7086">
                <rect
                  id="filter_icon"
                  rx="0.000000"
                  width="19.000000"
                  height="19.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="white"
                  fillOpacity="0"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#clip3343_7086)">
              <path
                id="Vector"
                d="M16.2 3.5C15.3 3.5 14.7 4 14.5 4.7L2.6 4.7Q2.3 4.7 2.14 4.85Q2 5 2 5.29Q2 5.6 2.14 5.75Q2.3 5.89 2.6 5.89L14.39 5.89C14.6 6.6 15.39 7.1 16.1 7.1C17.1 7.1 17.89 6.29 17.89 5.29C18 4.29 17.1 3.5 16.2 3.5ZM16.2 5.89Q15.89 5.89 15.75 5.75Q15.6 5.6 15.6 5.29Q15.6 5 15.75 4.85Q15.89 4.7 16.2 4.7Q16.5 4.7 16.64 4.85Q16.79 5 16.79 5.29C16.79 5.7 16.5 5.89 16.2 5.89ZM16.2 9.39L9.3 9.39C9 8.7 8.39 8.2 7.5 8.2C6.6 8.2 6 8.7 5.8 9.39L2.6 9.39Q2.3 9.39 2.14 9.54Q2 9.7 2 10Q2 10.29 2.14 10.45Q2.3 10.6 2.6 10.6L5.8 10.6C6 11.29 6.8 11.79 7.5 11.79C8.19 11.79 9 11.29 9.3 10.6L16.2 10.6Q16.5 10.6 16.64 10.45Q16.79 10.29 16.79 10C16.79 9.6 16.5 9.39 16.2 9.39ZM7.5 10.6C7.19 10.6 6.89 10.39 6.89 10Q6.89 9.7 7.05 9.54Q7.19 9.39 7.5 9.39Q7.8 9.39 7.94 9.54Q8.1 9.7 8.1 10Q8.1 10.29 7.94 10.45Q7.8 10.6 7.5 10.6ZM14.2 14.1L16.2 14.1C16.5 14.1 16.79 14.39 16.7 14.7Q16.7 15 16.54 15.14Q16.39 15.29 16.1 15.29L14.1 15.29C13.89 16 13.1 16.5 12.39 16.5C11.7 16.5 10.89 16 10.7 15.29L2.6 15.29Q2.3 15.29 2.14 15.14Q2 15 2 14.7Q2 14.39 2.14 14.25Q2.3 14.1 2.6 14.1L10.8 14.1C11 13.39 11.6 12.89 12.5 12.89C13.3 12.89 14 13.39 14.2 14.1ZM12.05 15.14Q12.2 15.29 12.5 15.29C12.8 15.29 13.1 15.1 13.1 14.7Q13.1 14.39 12.95 14.25Q12.8 14.1 12.5 14.1C12.1 14.1 11.89 14.29 11.89 14.7Q11.89 15 12.05 15.14Z"
                fill="#575757"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
            </g>
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
        updateParam={updateParam}
        currentPage={filterParams.page}
        totalPages={data?.totalPages || 0}
      />
    </>
  );
}

export default CardCatalog;
