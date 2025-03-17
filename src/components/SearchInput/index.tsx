import useDebounce from "hooks/useDebounce";
import { useEffect, useState } from "react";

import Input from "components/Input";

import { SearchParamsType } from "components/CardCatalog";
import s from "./SearchInput.module.scss";

interface SearchInputType {
  setSearchState: React.Dispatch<React.SetStateAction<SearchParamsType>>;
}

function SearchInput({ setSearchState }: SearchInputType) {
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(inputValue, 500); // Используем задержку 500 мс

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value); // Обновляем inputValue сразу при изменении
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  useEffect(() => {
    // Обновляем параметр только после задержки
    setSearchState((prevState) => ({
      ...prevState,
      q: debouncedValue,
      page: 1,
    }));
  }, [debouncedValue, setSearchState]);

  return (
    <div className={s.wrapper}>
      <svg
        className={s.searchIcon}
        width="20.000000"
        height="20.000000"
        viewBox="0 0 20 20"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector"
          d="M8.39 2C7.38 2 6.37 2.24 5.47 2.7C4.56 3.17 3.78 3.85 3.19 4.67C2.6 5.5 2.21 6.46 2.06 7.47C1.91 8.48 2.01 9.51 2.34 10.47C2.67 11.43 3.23 12.3 3.96 13.01C4.69 13.71 5.59 14.24 6.56 14.53C7.54 14.82 8.57 14.87 9.57 14.69C10.57 14.5 11.51 14.08 12.32 13.45L16.63 17.76C16.78 17.91 16.98 18 17.19 18C17.41 18 17.61 17.91 17.76 17.76C17.91 17.61 17.99 17.41 17.99 17.19C17.99 16.98 17.91 16.78 17.76 16.63L13.45 12.32C14.18 11.37 14.64 10.24 14.76 9.05C14.88 7.86 14.67 6.66 14.14 5.58C13.62 4.5 12.8 3.6 11.78 2.96C10.77 2.33 9.59 2 8.39 2ZM3.59 8.39C3.59 7.12 4.1 5.9 5 5C5.9 4.1 7.12 3.6 8.39 3.6C9.67 3.6 10.89 4.1 11.79 5C12.69 5.9 13.19 7.12 13.19 8.39C13.19 9.67 12.69 10.89 11.79 11.79C10.89 12.69 9.67 13.19 8.39 13.19C7.12 13.19 5.9 12.69 5 11.79C4.1 10.89 3.59 9.67 3.59 8.39Z"
        />
      </svg>
      {/* <input
        type="text"
        placeholder="Painting title"
        className={s.input}
        value={inputValue}
        onChange={handleChangeInput}
      /> */}
      <Input
        className={s.input}
        type="text"
        placeholder="Painting title"
        value={inputValue}
        onChange={handleChangeInput}
      />
      {inputValue && (
        <button
          className={s.clearBtn}
          type="button"
          onKeyDown={(e) => e.key === "Enter" && handleClearInput()}
          onClick={() => handleClearInput()}
          aria-label="clear input"
        >
          <svg
            className={s.crossIcon}
            width="8.000000"
            height="8.000000"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M0.96 0.16C0.74 -0.06 0.38 -0.06 0.16 0.16C-0.06 0.39 -0.06 0.75 0.16 0.98L3.2 4.07L0.3 7.01C0.08 7.24 0.08 7.6 0.3 7.83C0.52 8.05 0.88 8.05 1.1 7.83L4 4.88L6.89 7.83C7.11 8.05 7.47 8.05 7.69 7.83C7.91 7.6 7.91 7.24 7.69 7.01L4.79 4.07L7.83 0.98C8.05 0.75 8.05 0.39 7.83 0.16C7.61 -0.06 7.25 -0.06 7.03 0.16L4 3.25L0.96 0.16Z"
              fill="inherit"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default SearchInput;
