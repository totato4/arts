import s from "./SearchInput.module.scss";

interface SearchInputType {
  value: string;
  updateParam: (name: string, val: string) => void;
}

function SearchInput({ value, updateParam }: SearchInputType) {
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
      <input
        type="text"
        className={s.input}
        value={value}
        onChange={(e) => updateParam("name", e.target.value)}
      />
      {value && (
        <svg
          className={s.crossIcon}
          width="12.000000"
          height="12.000000"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector"
            d="M2.96 2.16C2.74 1.94 2.38 1.94 2.16 2.16C1.94 2.39 1.94 2.75 2.16 2.98L5.2 6.07L2.3 9.01C2.08 9.24 2.08 9.6 2.3 9.83C2.52 10.05 2.88 10.05 3.1 9.83L6 6.88L8.89 9.83C9.11 10.05 9.47 10.05 9.69 9.83C9.91 9.6 9.91 9.24 9.69 9.01L6.79 6.07L9.83 2.98C10.05 2.75 10.05 2.39 9.83 2.16C9.61 1.94 9.25 1.94 9.03 2.16L6 5.25L2.96 2.16Z"
            fill="#DEDEDE"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      )}
    </div>
  );
}

export default SearchInput;
