import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import style from "./Button.module.scss";
const Button = () => {
  return (
    <div className={style.btnFooter}>
      <Link to="/order" className={style.btnOrderSidebar}>
        <span>Update</span>
      </Link>
    </div>
  );
};

export default Button;
