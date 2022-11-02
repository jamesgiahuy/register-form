import React, { memo } from "react";
import style from "./Table.module.scss";
import clsx from "clsx";
import Dropdonw from "./dropdown";
import { ORDER_STATUSES } from "../Status";
import { format } from "date-fns";
const ListItem = (props) => {
  const classes = clsx(style.item0px);
  const classOutForDeli = clsx(style.item100px, style.outForDeli);
  const classPatientName = clsx(style.item200px, style.patientName);
  // const classtableHead = clsx(style.thead, style.theadStyle);
  // const classReadyToPick = clsx(style.item100px, style.readyToPick);
  // const classblue = clsx(style.item100px, style.blueColor);

  const {
    full_address,
    patient,
    status,
    access_token,
    delivery_distance,
    quantity,
    id,
    status_updated_at,
    pickup_start_time,
  } = props;
  console.log(quantity);
  return (
    <ul className={style.theadWrap}>
      <div
        className={classOutForDeli}
        style={{
          color: ORDER_STATUSES[status].color,
          border: `3px solid ${ORDER_STATUSES[status].color}`,
        }}
      >
        <span>{ORDER_STATUSES[status].text}</span>
      </div>
      <div className={style.item100px}>
        {format(new Date(status_updated_at), `MM/dd/yy`)}
        <br />
        {format(new Date(status_updated_at), `hh:mm aaaaa`)}
      </div>
      <div className={classPatientName}>{patient}</div>
      <div className={style.item200px}>(702) 555-0122</div>
      <div className={style.item200px}>
        {format(new Date(pickup_start_time), `MM/dd/yy`)}
        <br />
        {format(new Date(pickup_start_time), `hh:mm aaaaa`)}
      </div>
      <div className={style.item200px}>{full_address}</div>
      <div className={style.item100px}>{delivery_distance}</div>
      <div className={style.item100px}>{quantity}</div>
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
        <Dropdonw />
      </div>
    </ul>
  );
};

export default memo(ListItem);
