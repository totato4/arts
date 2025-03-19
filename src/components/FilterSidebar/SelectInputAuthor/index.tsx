import { useEffect, useRef, useState } from "react";
import { Author } from "store/artDataQuery/types";

import useDebounce from "hooks/useDebounce";
import { useGetAuthorNameQuery } from "store/artDataQuery/artDataQuery";

import { FilterStateType } from "../types";
import s from "./SelectInputAuthor.module.scss";

interface SelectInputProps {
  setFilterState: React.Dispatch<React.SetStateAction<FilterStateType>>;
  toggleClear: boolean;
}

function SelectInputAuthor({ setFilterState, toggleClear }: SelectInputProps) {
  // closing and open popup logic
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleList = () => {
    setIsOpen(true);
  };

  //

  const [authorName, setAuthorName] = useState<string>("");

  const selectValue = ({ name, id }: Author) => {
    setAuthorName(name);
    setFilterState((prevState) => ({
      ...prevState,
      authorId: id,
    }));
    setIsOpen(false);
  };

  //

  const debouncedValue = useDebounce<string>(authorName, 150); // Используем задержку 500 мс

  //

  const { data, isSuccess } = useGetAuthorNameQuery(debouncedValue);

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
    setAuthorName("");
  }, [toggleClear]);

  return (
    <div className={s.wrapper} ref={ref}>
      <input
        className={s.input}
        onClick={toggleList}
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        type="text"
        placeholder="Select the author"
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

      {isOpen && data && isSuccess && data[0]?.name !== authorName && (
        <div className={s.listWrapper}>
          {data?.length > 0 ? (
            <ul className={s.list}>
              {data.map((elem: Author) => (
                <li className={s.listItem} key={elem.name + elem.id}>
                  <button
                    type="button"
                    onClick={() => selectValue(elem)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        selectValue(elem);
                      }
                    }}
                  >
                    {elem.name}
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

export default SelectInputAuthor;
