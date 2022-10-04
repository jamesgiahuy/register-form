import React from "react";
import style from "./Header.module.scss";
import clsx from "clsx";

const HeaderContent = () => {
  const classes = clsx("container", style.headerContent);
  return (
    <div className={style.headerWrap}>
      <div className={style.wrapWelcome}>
        <img src="/images/menu.svg" />
        <div>
          <div className={style.welcome}>Welcome Back</div>
          <div className={style.morning}>Morning, John Wick Rx</div>
        </div>
      </div>
      <div className={style.quantity}>
        <span>
          Quantity Delivers:
          <span className={style.colorAdd}> 26 </span>
          <span>/ 10</span>
        </span>
        <img src="/images/edit.svg" />
        <img src="/images/garbage.svg" />
      </div>
      <div className={style.noti}>
        <img src="/images/notification on.svg" />
        <img src="/images/Line 77.svg" />
        <div className={style.avaWrap}>
          <img src="/images/ava.svg" />
        </div>
        <div>
          <div className={style.ava}>John Wick</div>
          <div className={style.admin}>Admin</div>
        </div>
        <img src="/images/arrow.svg" />
      </div>
    </div>
  );
};

export default HeaderContent;
