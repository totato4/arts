import s from "./Card.module.scss";

function Card() {
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <h3 className={s.title}>CASCATE DI TIVOLI</h3>
        <p className={s.subtitle}>1761</p>
      </div>
    </div>
  );
}

export default Card;