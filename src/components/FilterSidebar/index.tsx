import { useEffect, useState } from "react";
import getAuthors from "../../api/authorsService/authorsService";
import getLocations from "../../api/locationService/locationService";
import { Author, FilterParamsType } from "../../types";
import Accordion from "../Accordion";
import SelectInput from "../SelectInput";
import s from "./Sidebar.module.scss";

export interface FilterType {
  locationId: string;
  authorId: string;
  created_gte: string;
  created_lte: string;
}

interface FilterSidebarProps {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterParams: React.Dispatch<React.SetStateAction<FilterParamsType>>;
}

const emptyFilter: FilterType = {
  locationId: "",
  authorId: "",
  created_gte: "",
  created_lte: "",
};

function FilterSidebar({
  setSidebarIsOpen,
  sidebarIsOpen,
  setFilterParams,
}: FilterSidebarProps) {
  const [filter, setFilter] = useState<FilterType>(emptyFilter);
  const [isFilterEmpty, setIsFilterEmpty] = useState<boolean>(true);

  const checkIfFilterIsEmpty = (obj: FilterType): boolean => {
    return Object.values(obj).every((value) => value === "");
  };

  const HandleOnFilter = () => {
    if (!isFilterEmpty) {
      setFilterParams((prevState) => ({
        ...prevState,
        ...filter,
      }));
    }
  };

  //
  const handleChangeFrom = (value: string) => {
    setFilter((prevState) => ({
      ...prevState,
      created_gte: value,
    }));
  };

  const handleChangeTo = (value: string) => {
    setFilter((prevState) => ({
      ...prevState,
      created_lte: value,
    }));
  };

  const handleClear = () => {
    setFilter(emptyFilter);
    setFilterParams((prevState) => ({
      ...prevState,
      ...emptyFilter,
    }));
  };
  //

  // get authors list
  const [authors, setAuthors] = useState<Author[]>([]);

  // get select list
  const [locations, setLocations] = useState<Author[]>([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const data = await getAuthors();
      setAuthors(data);
    };

    fetchAuthors();

    const fetchLocations = async () => {
      const data = await getLocations();
      setLocations(data);
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    setIsFilterEmpty(checkIfFilterIsEmpty(filter));
  }, [filter, isFilterEmpty]);

  //

  return (
    <div className={`${!sidebarIsOpen && s.hide} ${s.wrapper} `}>
      <div className={s.container}>
        <button
          onClick={() => setSidebarIsOpen(false)}
          className={s.btn}
          aria-label="Close menu"
          type="button"
        >
          <svg
            className={s.closeIcon}
            viewBox="0 0 20 20"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M2.38 16.82C2.16 17.04 2.16 17.38 2.38 17.6C2.6 17.83 2.93 17.83 3.15 17.6L9.88 10.89L16.73 17.83C16.95 18.05 17.28 18.05 17.5 17.83C17.72 17.6 17.72 17.27 17.5 17.04L10.66 10.11L17.83 2.95C18.05 2.72 18.05 2.39 17.83 2.16C17.61 1.94 17.28 1.94 17.06 2.16L9.88 9.32L2.93 2.27C2.71 2.05 2.38 2.05 2.16 2.27C1.94 2.5 1.94 2.83 2.16 3.06L9.22 10.11L2.38 16.82Z"
              fill="inherit"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className={s.filters}>
          <Accordion title="ARTIST">
            <SelectInput
              setFilter={setFilter}
              paramName="authorId"
              list={authors}
            />
          </Accordion>
          <Accordion title="LOCATION">
            <SelectInput
              setFilter={setFilter}
              paramName="locationId"
              list={locations}
            />
          </Accordion>
          <Accordion title="YEARS">
            <input
              className={s.dateInput}
              type="text"
              value={filter.created_gte}
              placeholder="From"
              onChange={(e) => handleChangeFrom(e.target.value)}
            />
            <div>
              <svg
                className={s.minusIcon}
                viewBox="0 0 20 20"
                fill="inherit"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="clip5624_5155">
                    <rect
                      id="minus_icon"
                      rx="0.000000"
                      width="19.000000"
                      height="19.000000"
                      transform="translate(0.500000 0.500000)"
                      fill="white"
                      fillOpacity="0"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#clip5624_5155)">
                  <path
                    id="Vector"
                    d="M10.7 10.7L17.4 10.7C17.59 10.7 17.7 10.6 17.9 10.5C17.9 10.3 18 10.2 18 10C18 9.79 17.9 9.69 17.79 9.5C17.7 9.39 17.5 9.29 17.29 9.29L10.7 9.29L9.29 9.29L2.7 9.29C2.5 9.29 2.4 9.39 2.2 9.5C2.09 9.69 2 9.79 2 10C2 10.2 2.09 10.3 2.2 10.5C2.29 10.6 2.5 10.7 2.7 10.7L9.4 10.7L10.7 10.7Z"
                    fill="inherit"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
            </div>
            <input
              className={s.dateInput}
              type="text"
              value={filter.created_lte}
              placeholder="To"
              onChange={(e) => handleChangeTo(e.target.value)}
            />
          </Accordion>
        </div>
        <div className={s.bottomButtons}>
          <button
            className={`${s.ResultBtn} ${isFilterEmpty && s.onEmpty}`}
            onClick={HandleOnFilter}
            onKeyDown={(e) => e.key === "Enter" && HandleOnFilter}
            type="button"
            aria-label="show filters result"
          >
            SHOW THE RESULTS
          </button>
          <button
            className={`${s.clearBtn} ${isFilterEmpty && s.onEmpty}`}
            type="button"
            aria-label="clear filters result"
            onClick={handleClear}
            onKeyDown={(e) => e.key === "Enter" && handleClear}
          >
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
