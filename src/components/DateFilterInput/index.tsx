import React from "react";
import s from "./DateFilterInput.module.scss";

interface DateFilterInputProps {
  name: string;
  value: string;
  placeholder: string;
  updateParam: (name: string, value: string) => void;
}

function DateFilterInput({
  name,
  value,
  placeholder,
  updateParam,
}: DateFilterInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateParam(name, e.target.value); // Передаем имя параметра и значение
  };

  return (
    <input
      className={s.input}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default DateFilterInput;
