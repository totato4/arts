import Header from "components/Header";
import PictureCatalog from "components/PictureCatalog";
import { useAppSelector } from "hooks/useRedux";
import { useEffect } from "react";

function App() {
  const theme = useAppSelector((state) => state.theme.theme);
  // Устанавливаем атрибут data-theme на корневом элементе <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); // Эффект срабатывает при изменении темы

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <PictureCatalog />
        <div className="moda" />
      </div>
    </div>
  );
}

export default App;
