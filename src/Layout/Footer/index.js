import React from "react";
import style from "./Footer.module.scss";

const Footer = (props) => {
  const { pagination, onPageChange } = props;
  const { page, limit, pages } = pagination;
  console.log(page);
  const handlePageChange = (newPage) => {
    console.log(newPage);
    onPageChange(newPage);
  };

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
        <div
          className={style.numberPage}
          onClick={() => handlePageChange(page)}
        >
          <img src="/images/backarrow.svg" alt="#" />
        </div>
        <div
          className={style.numberPage}
          onClick={() => handlePageChange(page - 1)}
        >
          <img src="/images/Path1.svg" alt="#" />
        </div>
        <div
          className={`${style.numberPage}`}
          onClick={() => handlePageChange(1)}
        >
          1
        </div>
        <div className={style.numberPage} onClick={() => handlePageChange(2)}>
          2
        </div>

        <div className={style.numberPage}>...</div>
        <div className={style.numberPage} onClick={() => handlePageChange(3)}>
          3
        </div>
        <div
          className={style.numberPage}
          onClick={() => handlePageChange(page + 1)}
        >
          <img src="/images/Path2.svg" alt="#" />
        </div>
        <div
          className={style.numberPage}
          onClick={() => handlePageChange(pages)}
        >
          <img src="/images/nextArrow.svg" alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
