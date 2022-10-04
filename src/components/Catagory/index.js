import React from "react";
import style from "./Catagory.module.scss";

const Catagory = (props) => {
  const { logo, title } = props;
  return (
    <div className={style.catagoryWrap}>
      <img src={logo} />
      <span>{title}</span>
    </div>
  );
};

export default Catagory;
