import { useEffect, useRef, useState } from "react";
import { Author } from "RTK/artDataQuery/types";
import { FilterType } from "types";
import s from "./SelectInput.module.scss";

interface SelectInputProps {
  filter: string;
  paramName: string;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  list: Author[];
}

function SelectInput({ filter, setFilter, paramName, list }: SelectInputProps) {
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
        placeholder="Select the artist"
      />

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
