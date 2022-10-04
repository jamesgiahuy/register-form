// import OrderPage from "./Pages/OrderPages";
import "./OrderPage.scss";
import Sidebar from "../../Layout/Sidebar";
import SidebarContent from "../../Layout/Content";
import { Outlet } from "react-router-dom";
function OrderPage() {
  return (
    <div className="wrapper">
      <Sidebar />
      <SidebarContent />
    </div>
  );
}

export default OrderPage;
