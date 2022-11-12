import React from "react";
import style from "./Table.module.scss";
import clsx from "clsx";
import queryString from "query-string";
import { useEffect } from "react";
import { getAllUsers, getUserDetail } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ListItem from "./ListItem";
import { useState } from "react";
import Footer from "../../Layout/Footer";
const Table = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classtableHead = clsx(style.thead, style.theadStyle);

  const user = useSelector((state) => state.auth.login?.currentUser); //selector lấy user từ login trả về trong đó có accesstoken
  const allUsers = useSelector((state) => state.users.users.allUsers); // mảng chứa các user
  const access_token = localStorage.getItem("access_token");
  const listUser = allUsers?.data;
  const metaData = allUsers?.metadata || {};

  // console.log(listUser); // mảng chứa các user list
  const { filters, setFilters, pagination, setPagination, searchTerm } = props;
  // console.log(orderDetail.current);
  // const { status_name } = userDetail?.data || {};
  // const { full_address } = userDetail?.data.destination || {};
  // const [pagination, setPagination] = useState({
  //   count: 12525,
  //   from: 1,
  //   items: 10,
  //   last: 1253,
  //   limit: 10,
  //   next: 2,
  //   offset: 0,
  //   outset: 0,
  //   page: 1,
  //   pages: 1253,
  //   prev: null,
  //   to: 10,
  // });

  // const [filters, setFilters] = useState({
  //   count: 12525,
  //   from: 1,
  //   items: 10,
  //   last: 1253,
  //   limit: 10,
  //   next: 2,
  //   offset: 0,
  //   outset: 0,
  //   page: 1,
  //   pages: 1253,
  //   prev: null,
  //   to: 10,
  // });

  // nhận về số trang mới
  const handlePageChange = (newPage) => {
    console.log(newPage);
    setFilters({
      ...metaData,
      page: newPage,
      external_id: searchTerm,
    });
  };

  useEffect(() => {
    const paramsString = queryString.stringify(filters);
    // kiểm tra có user
    if (!access_token) {
      navigate("/");
    }
    if (access_token) {
      getAllUsers(access_token, dispatch, paramsString); // đã lưu vào trong srote ,muốn  lấy nó ra  thì lấy bằng useSelector
      setPagination(metaData);
    }
  }, [filters]);
  // useEffect(() => {
  //   listUser?.forEach((userDetail) =>
  //     getUserDetail(access_token, dispatch, userDetail.id)
  //   );
  // }, [listUser]);

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
      </div>
      <Footer pagination={metaData} onPageChange={handlePageChange} />
    </div>
  );
};

export default Table;
