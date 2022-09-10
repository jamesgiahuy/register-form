import React from "react";
import InputForm from "../../InputForm";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="wrap-register__content login">
      <div className="register__content">
        <div className="register__logo login">
          <img src="./images/image6.svg" alt="#" />
        </div>
        <div className="wrapper-form">
          <div className="wrapper-personal">
            <InputForm
              img={"/images/Email.svg"}
              placeholder={"Email"}
              type={"email"}
              id={"email"}
            />
            <InputForm
              img={"/images/key.svg"}
              placeholder={"Password"}
              eyes={"images/eye off.svg"}
              type={"password"}
              id={"password"}
            />
          </div>
          <div className="wrapper-btn">
            <button>Login</button>
          </div>
          <div className="navigate-login">
            <span>
              <Link to="/login">Register</Link>
            </span>
          </div>
          <div className="navigate-login mb">
            <span>
              <Link to="/login">I forgot password</Link>
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
