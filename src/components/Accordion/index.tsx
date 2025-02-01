import { ReactNode, useState } from "react";
import s from "./Accordion.module.scss";

interface AccordionProps {
  children: ReactNode;
  title: string;
}

function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={s.wrapper}>
      <button className={s.header} type="button" aria-label="show filter">
        <div className={s.title}>title</div>
        <div className={s.headerIcon}>icon</div>
      </button>
      <div className={s.filter} />
    </div>
  );
}

export default Accordion;
