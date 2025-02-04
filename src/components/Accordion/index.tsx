import { ReactNode, useEffect, useState } from "react";
import s from "./Accordion.module.scss";

interface AccordionProps {
  children: ReactNode;
  title: string;
}

function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    console.log(open);
  }, [open]);
  return (
    <div className={`${s.wrapper} ${open ? s.open : ""}`}>
      <button
        className={s.header}
        type="button"
        aria-label="show filter"
        onClick={() => setOpen(!open)}
      >
        <div className={s.title}>{title}</div>

        {open ? (
          <svg
            className={s.headerIcon}
            viewBox="0 0 20 20"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip5624_5155">
                <rect
                  id="minus_icon"
                  rx="0.000000"
                  width="19.000000"
                  height="19.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="white"
                  fillOpacity="0"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#clip5624_5155)">
              <path
                id="Vector"
                d="M10.7 10.7L17.4 10.7C17.59 10.7 17.7 10.6 17.9 10.5C17.9 10.3 18 10.2 18 10C18 9.79 17.9 9.69 17.79 9.5C17.7 9.39 17.5 9.29 17.29 9.29L10.7 9.29L9.29 9.29L2.7 9.29C2.5 9.29 2.4 9.39 2.2 9.5C2.09 9.69 2 9.79 2 10C2 10.2 2.09 10.3 2.2 10.5C2.29 10.6 2.5 10.7 2.7 10.7L9.4 10.7L10.7 10.7Z"
                fill="inherit"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
            </g>
          </svg>
        ) : (
          <svg
            className={s.headerIcon}
            viewBox="0 0 20 20"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M10 2C10.17 2 10.34 2.07 10.47 2.19C10.59 2.32 10.66 2.48 10.66 2.66L10.66 9.33L17.33 9.33C17.5 9.33 17.67 9.4 17.8 9.52C17.92 9.65 18 9.82 18 10C18 10.17 17.92 10.34 17.8 10.47C17.67 10.59 17.5 10.66 17.33 10.66L10.66 10.66L10.66 17.33C10.66 17.51 10.59 17.67 10.47 17.8C10.34 17.92 10.17 18 10 18C9.82 18 9.65 17.92 9.52 17.8C9.4 17.67 9.33 17.51 9.33 17.33L9.33 10.66L2.66 10.66C2.49 10.66 2.32 10.59 2.19 10.47C2.07 10.34 2 10.17 2 10C2 9.82 2.07 9.65 2.19 9.52C2.32 9.4 2.49 9.33 2.66 9.33L9.33 9.33L9.33 2.66C9.33 2.48 9.4 2.32 9.52 2.19C9.65 2.07 9.82 2 10 2Z"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </svg>
        )}
      </button>
      <div className={s.filter}>{children}</div>
    </div>
  );
}

export default Accordion;
