import CardCatalog from "components/CardCatalog";
import Header from "components/Header";
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
        <CardCatalog />
      </div>
    </div>
  );
}

export default App;
