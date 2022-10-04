import React from "react";
import style from "./Main.module.scss";
import { Link, Route, Routes } from "react-router-dom";
import Input from "../FormInput";

const Main = () => {
  return (
    <div className={style.mainWrap}>
      <h2>ORDERS</h2>
      <ul className={style.menuWrap}>
        <li>
          <Link to="/progress">In Progress</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
        <li>
          <Link to="/undeliverable">Undeliverable</Link>
        </li>
      </ul>
      <div className={style.inputWrap}>
        <form>
          <div className={style.wrapper}>
            <div className={style.wrapLabelimg}>
              <img src="/images/zoom in.svg" />
              {/* <label htmlFor="search" className={style.labelSeach}>
                Search
              </label> */}
            </div>
            <input
              id="search"
              type="text"
              className={style.inputSearch}
              placeholder="Search"
            />
            <div className={style.filterWrap}>
              <img src="/images/filter.svg" />
              <select className={style.orderFilter}>
                <option value="">Filter with Status</option>
                <option value="">Order Placed</option>
                <option value="">Ready To Pickup</option>
                <option value="">In Delivery</option>
                <option value="">Out For Delivery</option>
                <option value="">Delivered</option>
                <option value="">Completed</option>
                <option value="">Failed</option>
              </select>
              <img src="/images/arrow.svg" className={style.calendarOrder} />
            </div>
            <div className={style.filterWrap}>
              <img src="/images/arrow.svg" className={style.arrowDate} />
              <select className={style.orderFilter}>
                <option value="">Filter by date</option>
                <option value="">Order Placed</option>
                <option value="">Ready To Pickup</option>
                <option value="">In Delivery</option>
                <option value="">Out For Delivery</option>
                <option value="">Delivered</option>
                <option value="">Completed</option>
                <option value="">Failed</option>
              </select>
              <img src="/images/calendar.svg" className={style.calendarOrder} />
            </div>
          </div>
        </form>

        <div className={style.btnWrap}>
          <Link to="#" className={style.btnOrderSidebar}>
            <img src="/images/add file.svg" />
            <span>IMPORT ORDER</span>
          </Link>
          <Link to="/pages#" className={style.btnOrderSidebar}>
            <img src="/images/add file.svg" />
            <span>CREATE ORDER</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
