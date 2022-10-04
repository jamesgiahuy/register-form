import React from "react";
import Main from "../../components/Main";
import Table from "../../components/Table";
import Footer from "../../Layout/Footer";
import OrderPage from "../OrderPages/OrderPage";

import style from "./Home.module.scss";
const HomePage = () => {
  return (
    <div className={style.homePage}>
      <Main />
      <Table />
      <Footer />
    </div>
  );
};

export default HomePage;
