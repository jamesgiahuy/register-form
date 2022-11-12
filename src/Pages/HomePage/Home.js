import React, { useState } from "react";
import Main from "../../components/Main";
import Table from "../../components/Table";
import Footer from "../../Layout/Footer";
import OrderPage from "../OrderPages/OrderPage";

import style from "./Home.module.scss";
const HomePage = () => {
  const [searchTerm, setSeachTerm] = useState("");
  const [pagination, setPagination] = useState({
    count: 12525,
    from: 1,
    items: 10,
    last: 1253,
    limit: 10,
    next: 2,
    offset: 0,
    outset: 0,
    page: 1,
    pages: 1253,
    prev: null,
    to: 10,
  });

  const [filters, setFilters] = useState({
    count: 12525,
    from: 1,
    items: 10,
    last: 1253,
    limit: 10,
    next: 2,
    offset: 0,
    outset: 0,
    page: 1,
    pages: 1253,
    prev: null,
    to: 10,
  });

  //form submit from main
  // const handleFilterChange = (formValues) => {
  //   console.log(formValues.searchTerm);
  //   setSeachTerm(formValues.searchTerm);
  // };
  const handleFilterChange = (formValues) => {
    console.log(formValues);
    setFilters({
      ...filters,
      page: 1,
      external_id: formValues.searchTerm,
    });
  };

  return (
    <div className={style.homePage}>
      <Main onSubmit={handleFilterChange} />
      <Table
        filters={filters}
        setFilters={setFilters}
        pagination={pagination}
        setPagination={setPagination}
        // handlePageChange={handlePageChange}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default HomePage;
