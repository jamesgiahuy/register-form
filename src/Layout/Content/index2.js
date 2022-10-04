import React from "react";
import HeaderContent from "../../components/Header";
import clsx from "clsx";
import style from "./Content.module.scss";
import HomePage from "../../Pages/HomePage/Home";
import { Routes, Route } from "react-router-dom";
import OrderPage from "../../Pages/OrderPages/OrderPage";
import OrderPages from "../../Pages/OrderPages/OrderPage";

// import OrderPage from "./Pages/OrderPage";
const SidebarContent2 = () => {
  const classes = clsx(style.contentSidebar);

  return (
    <div className={classes}>
      <HeaderContent />
      <OrderPages />
      {/* order */}
    </div>
  );
};

export default SidebarContent2;
