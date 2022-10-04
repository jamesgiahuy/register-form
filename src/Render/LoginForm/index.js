import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import Slider from "../../Slider";
import Register from "../../Page/Register/Register";
import Login from "../../Page/Login/Login";

const LoginForm = () => {
  return (
    <div className="register">
      <Login />
      {/* <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
      {/* slider */}

      <div className="register__image">
        <div className="wrap-register__image">
          <Slider />
          {/* <div className="container-slider ">
            
            <img src="/images/delivery.svg" />
            <img src="/images/delivery.svg" />
            <img src="/images/delivery.svg" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
