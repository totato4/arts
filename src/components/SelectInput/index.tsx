import { useEffect, useRef, useState } from "react";
import { Author } from "../../types";
import s from "./SelectAuhor.module.scss";

interface SelectLocationProps {
  updateParam: (name: string, value: string | number) => void;
  paramName: string;
  list: Author[];
}

function SelectInput({ updateParam, paramName, list }: SelectLocationProps) {
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
      updateParam(paramName, "");
    }
  };

  const handleClickItem = (elem: Author) => {
    setInputVal(elem.name);
    updateParam(paramName, elem.id);
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
                <li className={s.listItem}>
                  <button
                    className={s.listItem}
                    type="button"
                    onClick={() => handleClickItem(elem)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleClickItem(elem)
                    }
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
