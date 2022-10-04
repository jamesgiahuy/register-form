import React from "react";
import style from "./Label.module.scss";
import clsx from "clsx";
const Label3 = (props) => {
  const { title, type, src, is_active } = props;
  // const classes = clsx()
  return (
    <div className={style.labelInputWrap2}>
      <label htmlFor={title}>{title}</label>
      <input type={type} id={title} />
      <img src={src} alt="#" />
    </div>
  );
};

export default Label3;
