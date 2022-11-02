import React from "react";
import style from "./Table.module.scss";
import clsx from "clsx";
import { useEffect } from "react";
import { getAllUsers, getUserDetail } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import data from "../../data";
import ListItem from "./ListItem";
import { useState } from "react";
import { useRef } from "react";
const Table = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classtableHead = clsx(style.thead, style.theadStyle);

  const user = useSelector((state) => state.auth.login?.currentUser); //selector lấy user từ login trả về trong đó có accesstoken
  const allUsers = useSelector((state) => state.users.users.allUsers); // mảng chứa các user
  const access_token = localStorage.getItem("access_token");
  const listUser = allUsers?.data;
  console.log(listUser);
  const userDetail = useSelector((state) => state.detail.users?.detailUser);
  // const orderDetail = useRef([]);
  // if (userDetail) {
  //   orderDetail.current.push(userDetail);
  // }
  // console.log(orderDetail.current);
  const { status_name } = userDetail?.data || {};
  const { full_address } = userDetail?.data.destination || {};
  useEffect(() => {
    // kiểm tra có user
    if (!access_token) {
      navigate("/");
    }
    if (access_token) {
      getAllUsers(access_token, dispatch); // đã lưu vào trong srote , lấy nó ra bằng useSelector
    }
  }, []);
  useEffect(() => {
    listUser?.forEach((userDetail) =>
      getUserDetail(access_token, dispatch, userDetail.id)
    );
  }, [listUser]);
  return (
    <div className={style.tableWrap}>
      <div className={classtableHead}>
        <ul className={style.theadWrap}>
          <div className={style.item100px}>Status</div>
          <div className={style.item100px}>Updated At</div>
          <div className={style.item200px}>Patient Name</div>
          <div className={style.item200px}>Patient Name</div>
          <div className={style.item200px}>Pickup At</div>
          <div className={style.item200px}>Destination</div>
          <div className={style.item100px}>Distance (miles)</div>
          <div className={style.item100px}>Quantity</div>
          <div className={style.item100px}>Refrigeration</div>
          <div className={style.item100px}>Controlled</div>
          <div className={style.item100px}>Hazardous</div>
          <div className={style.item100px}>Signature Required</div>
          <div className={style.item100px}>Leave At Door</div>
        </ul>
      </div>
      <div className={style.tbody}>
        {listUser?.map((user, index) => {
          const patient_name =
            user.recipient.first_name + user.recipient.last_name;
          return (
            <ListItem
              status={user.status}
              key={user.id}
              delivery_distance={Math.floor(user.delivery_distance)}
              full_address={user.destination.full_address}
              patient={patient_name}
              status_updated_at={user.status_updated_at}
              pickup_start_time={user.pickup_start_time}
              // quantity={user}
              // id={user.id}
            />
          );
        })}
        {/* <ul className={style.theadWrap}>
          <div className={classOutForDeli}>
            <span>Out For Delivery</span>
          </div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={classPatientName}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
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
        <ul className={style.theadWrap}>
          <div className={classReadyToPick}>Ready To Pick</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
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
        <ul className={style.theadWrap}>
          <div className={classReadyToPick}>Ready To Ship</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
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
        <ul className={style.theadWrap}>
          <div className={classOutForDeli}>Out For Delivery</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
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
        <ul className={style.theadWrap}>
          <div className={classOutForDeli}>In Delivery</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
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
        <ul className={style.theadWrap}>
          <div className={classReadyToPick}>Order Placed</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
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
        <ul className={style.theadWrap}>
          <div className={classblue}>Ready To Pickup</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
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
        <ul className={style.theadWrap}>
          <div className={classOutForDeli}>Out For Delivery</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
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
        <ul className={style.theadWrap}>
          <div className={classblue}>Ready To Pickup</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
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
        <ul className={style.theadWrap}>
          <div className={classReadyToPick}>Ready To Ship</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
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
        </ul> */}
      </div>
    </div>
  );
};

export default Table;
