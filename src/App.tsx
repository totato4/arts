import { useEffect } from "react";
import Header from "./components/Header/index";
import { useAppSelector } from "./hooks/useRedux";
import CardCatalog from "./components/CardCatalog";

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
        <CardCatalog />
      </div>
    </div>
  );
}

export default App;
