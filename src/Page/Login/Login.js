import React from "react";
import InputForm from "../../InputForm";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      worker: { email: email, password: password },
    };
    loginUser(newUser, dispatch, navigate);
  };

  const handleClick = (e) => {
    let inputEle = document.querySelector(`input[type='password']`);
    let imgEle = document.querySelector(`img[src='./images/eye off.svg']`);
    if (inputEle) {
      inputEle.type = "text";
    } else {
      document.querySelector(`input[type='text']`).type = "password";
    }
    console.log(inputEle);
    if (inputEle) {
      imgEle.src = "./images/eyeopen.svg";
    } else {
      document.querySelector(`img[src='./images/eyeopen.svg']`).src =
        "./images/eye off.svg";
    }
    e.stopPropagation();
  };

  useEffect(() => {
    const fixFlex = localStorage.setItem("fix", "fixFlex");
    const fix = localStorage.getItem("fix");
    const registerElement = document.querySelector(".register");
    registerElement.classList.add("fixFlex");
  }, []);

  return (
    <div className="wrap-register__content login">
      <div className="register__content">
        <div className="register__logo login">
          <img src="./images/image6.svg" alt="#" />
        </div>
        <div className="wrapper-form">
          <div className="wrapper-personal">
            <form onSubmit={handleSubmit}>
              <div className="register__input">
                <span className="register__icon">
                  <img src="./images/Email.svg" alt="" />
                </span>

                <input
                  className="register__input-item"
                  type="email"
                  id="email"
                  placeholder="phuongvo+rx123@mylong.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="register__label">
                  Email
                </label>
                <span className="register__icon register__eyes">
                  <img src="./images/" alt="" />
                </span>
              </div>
              <div className="register__input">
                <span className="register__icon">
                  <img src="./images/key.svg" alt="" />
                </span>
                <input
                  className="register__input-item"
                  type="password"
                  id="password"
                  placeholder="Password1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="email" className="register__label">
                  Password
                </label>

                <span
                  className="register__icon register__eyes"
                  onClick={handleClick}
                >
                  <img src="./images/eye off.svg" alt="" />
                </span>
              </div>
              <div className="wrapper-btn">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
          <div className="navigate-login">
            <span>
              <Link to="/register">Register</Link>
            </span>
          </div>
          <div className="navigate-login mb">
            <span>
              <Link to="/register">I forgot password</Link>
            </span>
          </div>
          <div className="register-copyright">
            <span>© 2021 RXdeliverdnow.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
