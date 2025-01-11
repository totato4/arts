import { useEffect } from "react";
import Card from "./components/Card";
import CardList from "./components/CardList";
import Header from "./components/Header/index";
import { useAppSelector } from "./hooks/useRedux";

function App() {
  const theme = useAppSelector((state) => state.theme.theme);
  // Устанавливаем атрибут data-theme на корневом элементе <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    console.log(theme);
  }, [theme]); // Эффект срабатывает при изменении темы

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <CardList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
      </div>
    </div>
  );
}

export default App;
