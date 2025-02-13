import { useEffect, useRef, useState } from "react";
import { Location } from "../../types";
import s from "./SelectLocation.module.scss";

interface SelectLocationProps {
  updateParam: (name: string, value: string | number) => void;
  locationValue: string;
  setLocationValue: React.Dispatch<React.SetStateAction<string>>;
}

function SelectLocation({
  updateParam,
  locationValue,
  setLocationValue,
}: SelectLocationProps) {
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

  const handleInput = (val: string) => {
    setLocationValue(val);
  };

  const handleClickItem = (elem: Location) => {
    setLocationValue(elem.location);
    updateParam("locationId", elem.id);
    setIsOpen(false);
  };

  return (
    <div className={s.wrapper} ref={ref}>
      <input
        className={s.input}
        onClick={toggleList}
        value={locationValue}
        onChange={(e) => handleInput(e.target.value)}
        type="text"
        placeholder="Select the artist"
      />

      {isOpen && (
        <div className={s.listWrapper}>
          {!loading && locations && (
            <ul className={s.list}>
              {locations.map((elem: Location) => (
                <li className={s.listItem}>
                  <button
                    className={s.listItem}
                    type="button"
                    onClick={() => handleClickItem(elem)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleClickItem(elem)
                    }
                  >
                    {elem.location}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default SelectLocation;
