import React from "react";
import style from "./Table.module.scss";
import clsx from "clsx";
import { useEffect } from "react";
import { getUserDetail } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
const ListItem = (props) => {
  const classes = clsx(style.item0px);
  const classtableHead = clsx(style.thead, style.theadStyle);
  const classOutForDeli = clsx(style.item100px, style.outForDeli);
  const classPatientName = clsx(style.item200px, style.patientName);
  const classReadyToPick = clsx(style.item100px, style.readyToPick);
  const classblue = clsx(style.item100px, style.blueColor);

  const { destination, patient, status, access_token, id } = props;
  const dispatch = useDispatch();
  // const { full_address } = user.destination;
  useEffect(() => {
    getUserDetail(access_token, dispatch, id);
  }, []);

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
      <div className={style.item200px}>{destination}</div>
      <div className={style.item100px}>5.0</div>
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

export default ListItem;
