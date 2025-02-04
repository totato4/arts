import React from "react";
import s from "./DateFilterInput.module.scss";

interface DateFilterInputProps {
  placeholder: string;
  value: string;
  setValue: () => {};
}

function DateFilterInput({ placeholder }: DateFilterInputProps) {
  return <input className={s.input} type="text" placeholder={placeholder} />;
}

export default DateFilterInput;
