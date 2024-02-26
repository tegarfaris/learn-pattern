import React, { ChangeEventHandler } from "react";
import style from"./style.module.css";
import { error } from "console";

interface InputFieldProps {
  id: string;
  name: string;
  type:React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  errorMessage?: string;
}

const InputField:React.FC<InputFieldProps> = ({id, name, type, placeholder, onChange, required, errorMessage}) => {
  return (
    <>
    <input id={id} name={name} onChange={onChange} placeholder={placeholder} type={type} required={required} className={style[errorMessage ? "error" : "input"]} />
    <p>{errorMessage && errorMessage}</p>
    </>
  );
};

export default InputField;
