import { useEffect, useRef, useState } from "react";
import { Author } from "../../types";
import { FilterType } from "../FilterSidebar";
import s from "./SelectAuhor.module.scss";

interface SelectLocationProps {
  paramName: string;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  list: Author[];
}

function SelectInput({ setFilter, paramName, list }: SelectLocationProps) {
  const [inputVal, setInputVal] = useState<string>("");

  // closing and open popup logic
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleList = () => {
    setIsOpen(true);
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

  //
  const handleChangeInput = (value: string) => {
    setInputVal(value);
    if (!value.length) {
      setFilter((prevState) => ({
        ...prevState,
        [paramName]: "",
      }));
    }
  };

  const handleSelectItem = (elem: Author) => {
    setInputVal(elem.name);
    setFilter((prevState) => ({
      ...prevState,
      [paramName]: elem.id,
    }));
    setIsOpen(false);
  };

  //
  return (
    <div className={s.wrapper} ref={ref}>
      <input
        className={s.input}
        onClick={toggleList}
        value={inputVal}
        onChange={(e) => handleChangeInput(e.target.value)}
        type="text"
        placeholder="Select the artist"
      />

      {isOpen && (
        <div className={s.listWrapper}>
          <ul className={s.list}>
            {list
              .filter((elem) => {
                return elem.name.toLowerCase().includes(inputVal.toLowerCase());
              })
              .map((elem: Author) => (
                <li className={s.listItem} key={elem.name + elem.id}>
                  <button
                    type="button"
                    onClick={() => handleSelectItem(elem)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSelectItem(elem);
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
