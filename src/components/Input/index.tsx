/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import s from "./input.module.scss";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function Input({ className, ...props }: InputProps) {
  return <input className={`${s.input} ${className || ""}`} {...props} />;
}

export default Input;
