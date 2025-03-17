import { FilterType } from "components/FilterSidebar";
import { useEffect, useRef, useState } from "react";
import { Author } from "store/artDataQuery/types";

import s from "./SelectInput.module.scss";

interface SelectInputProps {
  filter: string;
  paramName: string;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  list: Author[];
  placeholder: string;
}

function SelectInput({
  filter,
  setFilter,
  paramName,
  list,
  placeholder,
}: SelectInputProps) {
  // closing and open popup logic
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  // close if find one list item
  const listNames = list.map((elem) => elem.name);
  const findOne = listNames.includes(filter);

  const toggleList = () => {
    setIsOpen(true);
  };

  const changeValue = (value: string) => {
    setFilter((prevState) => ({
      ...prevState,
      [paramName]: value,
    }));
  };

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

  return (
    <div className={s.wrapper} ref={ref}>
      <input
        className={s.input}
        onClick={toggleList}
        value={filter}
        onChange={(e) => changeValue(e.target.value)}
        type="text"
        placeholder={placeholder}
      />
      <svg
        className={`${s.arrowSvg} ${isOpen && !findOne && s.arrowSvg_open}`}
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

      {isOpen && !findOne && (
        <div className={s.listWrapper}>
          <ul className={s.list}>
            {list
              .filter((elem) => {
                return elem.name.toLowerCase().includes(filter.toLowerCase());
              })
              .map((elem: Author) => (
                <li className={s.listItem} key={elem.name + elem.id}>
                  <button
                    type="button"
                    onClick={() => changeValue(elem.name)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        changeValue(elem.name);
                      }
                    }}
                  >
                    {elem.name}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectInput;
