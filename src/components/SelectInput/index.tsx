import { useEffect, useRef, useState } from "react";
import s from "./SelectInput.module.scss";

interface SelectInputProps {
  placeholder: string;
  items: string[];
  name: string;
  value: string;
  updateParam: (name: string, value: string) => void;
}

function SelectInput({
  placeholder,
  items = [""],
  value,
  updateParam,
  name,
}: SelectInputProps) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateParam(name, e.target.value);
  };

  //
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

  const handleClickItem = (elem: string) => {
    updateParam(name, elem);
    setIsOpen(false);
  };

  return (
    <div className={s.wrapper} ref={ref}>
      <input
        className={s.input}
        onClick={toggleList}
        value={value}
        onChange={(e) => handleInput(e)}
        type="text"
        placeholder={placeholder}
      />

      {isOpen && (
        <div className={s.listWrapper}>
          <ul className={s.list}>
            {items.map((elem) => (
              <li className={s.listItem}>
                <button
                  className={s.listItem}
                  type="button"
                  onClick={() => handleClickItem(elem)}
                  onKeyDown={(e) => e.key === "Enter" && handleClickItem(elem)}
                >
                  {elem}
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
