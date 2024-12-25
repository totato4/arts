import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

import style from "./Header.module.scss";

import Logo from "../../assets/svg/Logo.svg";
import { Icon } from "../../assets/svg/Icon";

function Header() {
  const dispatch = useAppDispatch();
  // const { theme } = useAppSelector((state) => state.themeSlice);
  // const switchTheme = () => {
  //   if (theme === "white") {
  //     dispatch(changeTheme("dark"));
  //   } else {
  //     dispatch(changeTheme("white"));
  //   }
  // };
  return (
    <header className={style.header}>
      <img className={style.Logo} src={Logo} alt="Logo" />
      <button
        type="button"
        className={style.frameWrapper}
        // onClick={() => switchTheme()}
      >
        <Icon id="frame" className="frame" />
      </button>
    </header>
  );
}

export default Header;
