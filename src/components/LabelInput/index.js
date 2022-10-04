import React from "react";
import style from "./Label.module.scss";
import clsx from "clsx";
const Label = (props) => {
  const { title, type, src, is_active } = props;
  // const classes = clsx()
  return (
    <div className={style.labelInputWrap}>
      {/* <img src={src} alt="#" className={``} /> */}
      <label htmlFor={title}>{title}</label>
      <input type={type} id={title} />
    </div>
  );
};

export default Label;
