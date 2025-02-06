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
                  onClick={() => updateParam(name, elem)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && updateParam(name, elem)
                  }
                >
                  {elem}
                </button>
              </li>
            ))}
            <li className={s.listItem}>Louvre Museum</li>
            <li className={s.listItem}>Van Gogh Museum</li>
            <li className={s.listItem}>State Tretyakov Gallery</li>
            <li className={s.listItem}>Thyssen-Bornemisza National Museum</li>
            <li className={s.listItem}>New York Historical Society Museum</li>
            <li className={s.listItem}>Louvre Museum</li>
            <li className={s.listItem}>Van Gogh Museum</li>
            <li className={s.listItem}>State Tretyakov Gallery</li>
            <li className={s.listItem}>Thyssen-Bornemisza National Museum</li>
            <li className={s.listItem}>New York Historical Society Museum</li>
            <li className={s.listItem}>Louvre Museum</li>
            <li className={s.listItem}>Van Gogh Museum</li>
            <li className={s.listItem}>State Tretyakov Gallery</li>
            <li className={s.listItem}>Thyssen-Bornemisza National Museum</li>
            <li className={s.listItem}>New York Historical Society Museum</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectInput;
