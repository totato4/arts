import { ReactNode } from "react";
import s from "./CardList.module.scss";

interface CardListProps {
  children: ReactNode;
}

function CardList({ children }: CardListProps) {
  return <div className={s.container}>{children}</div>;
}

export default CardList;
