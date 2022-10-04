import React from "react";
import style from "./Checkbox.module.scss";
const Checkbox = (props) => {
  const { title } = props;
  return (
    <div className={style.checkBoxwrap}>
      <input type="checkbox" id={title} className={style.orderCheckbox} />
      <label htmlFor={title} className={style.labelCheckbox}>
        {title}
      </label>
    </div>
  );
};

export default Checkbox;
