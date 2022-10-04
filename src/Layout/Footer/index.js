import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footerWrap}>
      <div className={style.btnWrapRows}>
        <select className={style.select}>
          <option>10 rows</option>
          <option>9 rows</option>
          <option>8 rows</option>
          <option>7 rows</option>
          <option>6 rows</option>
          <option>5 rows</option>
          <option>4 rows</option>
          <option>3 rows</option>
          <option>2 rows</option>
          <option>1 row</option>
        </select>
      </div>
      <div className={style.numberPageWrap}>
        <div className={style.numberPage}>
          <img src="/images/backarrow.svg" alt="#" />
        </div>
        <div className={style.numberPage}>
          <img src="/images/Path1.svg" alt="#" />
        </div>
        <div className={style.numberPage}>1</div>
        <div className={style.numberPage}>2</div>
        <div className={style.numberPage}>...</div>
        <div className={style.numberPage}>3</div>
        <div className={style.numberPage}>
          <img src="/images/nextArrow.svg" alt="#" />
        </div>
        <div className={style.numberPage}>
          <img src="/images/Path2.svg" alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
