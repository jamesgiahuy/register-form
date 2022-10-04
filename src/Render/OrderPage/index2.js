// import OrderPage from "./Pages/OrderPages";
import "./OrderPage.scss";
import Sidebar from "../../Layout/Sidebar";
import SidebarContent2 from "../../Layout/Content/index2";
import { Outlet } from "react-router-dom";
function OrderPageMain() {
  return (
    <div className="wrapper">
      <Sidebar />
      <SidebarContent2 />
    </div>
  );
}

export default OrderPageMain;
