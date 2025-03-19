import { useEffect, useRef, useState } from "react";
import { Location } from "store/artDataQuery/types";

import { useGetLocationNameQuery } from "store/artDataQuery/artDataQuery";
import { FilterStateType } from "../types";
import s from "./SelectInputLocation.module.scss";

interface SelectInputProps {
  setFilterState: React.Dispatch<React.SetStateAction<FilterStateType>>;
  toggleClear: boolean;
}

function SelectInputLocation({
  setFilterState,
  toggleClear,
}: SelectInputProps) {
  // closing and open popup logic
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleList = () => {
    setIsOpen(true);
  };

  const [locationName, setLocationName] = useState<string>("");

  const changeValue = ({ location, id }: Location) => {
    setLocationName(location);
    setFilterState((prevState) => ({
      ...prevState,
      locationId: id,
    }));
    setIsOpen(false);
  };

  //

  const { data, isSuccess } = useGetLocationNameQuery(locationName);

  //
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setLocationName("");
  }, [toggleClear]);

  return (
    <div className={s.wrapper} ref={ref}>
      <input
        className={s.input}
        onClick={toggleList}
        value={locationName}
        onChange={(e) => setLocationName(e.target.value)}
        type="text"
        placeholder="Select the location"
      />
      <svg
        className={`${s.arrowSvg} ${isOpen && data && data?.length > 1 && s.arrowSvg_open}`}
        width="20.000000"
        height="20.000000"
        viewBox="0 0 20 20"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs />
        <path
          id="Vector"
          d="M10 13L15.19 7.75L4.8 7.75L10 13Z"
          fill="inherit"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </svg>

      {isOpen && data && isSuccess && data[0]?.location !== locationName && (
        <div className={s.listWrapper}>
          {data?.length > 0 ? (
            <ul className={s.list}>
              {data.map((elem: Location) => (
                <li className={s.listItem} key={elem.location + elem.id}>
                  <button
                    type="button"
                    onClick={() => changeValue(elem)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        changeValue(elem);
                      }
                    }}
                  >
                    {elem.location}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className={s.noResult}>
              There are no matching results for your query.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SelectInputLocation;
