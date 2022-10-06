import React, { memo } from "react";
import style from "./Table.module.scss";
import clsx from "clsx";
const ListItem = (props) => {
  const classes = clsx(style.item0px);
  const classOutForDeli = clsx(style.item100px, style.outForDeli);
  const classPatientName = clsx(style.item200px, style.patientName);
  // const classtableHead = clsx(style.thead, style.theadStyle);
  // const classReadyToPick = clsx(style.item100px, style.readyToPick);
  // const classblue = clsx(style.item100px, style.blueColor);

  const { full_address, patient, status, access_token, delivery_distance } =
    props;
  console.log(status);

  return (
    <ul className={style.theadWrap}>
      <div className={classOutForDeli}>
        <span>{status}</span>
      </div>
      <div className={style.item100px}>
        10/26/2021 <br /> 03:00 p
      </div>
      <div className={classPatientName}>{patient}</div>
      <div className={style.item200px}>(702) 555-0122</div>
      <div className={style.item200px}>
        10/26/2021 <br /> 03:00 p
      </div>
      <div className={style.item200px}>{full_address}</div>
      <div className={style.item100px}>{delivery_distance}</div>
      <div className={style.item100px}>7</div>
      <div className={style.item1000px}>
        <img src="/images/check.svg" />
      </div>
      <div className={style.item1000px}>
        <img src="/images/close.svg" />
      </div>
      <div className={style.item1000px}>
        <img src="/images/close.svg" />
      </div>
      <div className={style.item1000px}>
        <img src="/images/close.svg" />
      </div>
      <div className={style.item1000px}>
        <img src="/images/check.svg" />
      </div>
      <div className={classes}>
        <img src="/images/vertical.svg" />
      </div>
    </ul>
  );
};

export default memo(ListItem);
