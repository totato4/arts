import { useEffect, useState } from "react";
import Card from "./components/Card";
import CardList from "./components/CardList";
import Header from "./components/Header/index";
import { useAppSelector } from "./hooks/useRedux";
import Toolbar from "./components/Toolbar";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const theme = useAppSelector((state) => state.theme.theme);
  // Устанавливаем атрибут data-theme на корневом элементе <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); // Эффект срабатывает при изменении темы

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Toolbar />
        <CardList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
        <Pagination
          ItemsPerPage={6}
          dataLength={10}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
