import React from "react";
import style from './Button.module.css'
const Button = ({title}) => {
  return (
    <button className={style.button}>
      <span className={style.span}></span>
      <span className={style.span}></span>
      <span className={style.span}></span>
      <span className={style.span}></span>
      <span className={style.span}>{title}</span>
    </button>
  );
};

export default Button;
