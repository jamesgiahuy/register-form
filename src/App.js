import logo from "./logo.svg";
import "./App.css";
import InputForm from "./InputForm";
import Textarea from "./Textarea";
import Slider from "./Slider";
import { Link, Route, Routes } from "react-router-dom";
import Register from "./Page/Register/Register";
import Login from "./Page/Login/Login";
import LoginForm from "./Render/LoginForm";
import OrderPage from "./Render/OrderPage";
import RegisterForm from "./Render/RegisterForm";
import HomePage from "./Pages/HomePage/Home";
import OrderPages from "./Pages/OrderPages/OrderPage";
import OrderPageMain from "./Render/OrderPage/index2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/pages" element={<OrderPageMain />} />
      <Route path="*" element={"404 Not Found"} />
    </Routes>
  );
}

export default App;
