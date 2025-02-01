import s from "./Sidebar.module.scss";

interface SidebarProps {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ setSidebarIsOpen, sidebarIsOpen }: SidebarProps) {
  return (
    <div className={`${!sidebarIsOpen && s.hide} ${s.wrapper} `}>
      <div className={s.container}>
        <button
          onClick={() => setSidebarIsOpen(false)}
          className={s.btn}
          aria-label="Close menu"
          type="button"
        >
          <svg
            className={s.closeIcon}
            viewBox="0 0 20 20"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M2.38 16.82C2.16 17.04 2.16 17.38 2.38 17.6C2.6 17.83 2.93 17.83 3.15 17.6L9.88 10.89L16.73 17.83C16.95 18.05 17.28 18.05 17.5 17.83C17.72 17.6 17.72 17.27 17.5 17.04L10.66 10.11L17.83 2.95C18.05 2.72 18.05 2.39 17.83 2.16C17.61 1.94 17.28 1.94 17.06 2.16L9.88 9.32L2.93 2.27C2.71 2.05 2.38 2.05 2.16 2.27C1.94 2.5 1.94 2.83 2.16 3.06L9.22 10.11L2.38 16.82Z"
              fill="inherit"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className={s.filters}>середина</div>
        <div className={s.bottomButtons}>
          <button
            className={s.ResultBtn}
            type="button"
            aria-label="show filters result"
          >
            SHOW THE RESULTS
          </button>
          <button
            className={s.clearBtn}
            type="button"
            aria-label="clear filters result"
          >
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
