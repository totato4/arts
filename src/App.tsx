import { useState } from "react";
import "./App.css";
import style from "./ap.module.scss";

function App() {
  const [content] = useState("content");

  return (
    <div className="container">
      <div className="wrapper">
        <div>{content}</div>
        <div className={style.text}>
          content Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Obcaecati, corporis.
        </div>
        <div className="paragraph-big-light">
          paragraph Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Nobis, placeat.
        </div>
        <div className="caption-big">
          Caption Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis, tempore.
        </div>
      </div>
    </div>
  );
}

export default App;
