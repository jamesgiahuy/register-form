import React from "react";
import InputForm from "../../InputForm";
import Textarea from "../../Textarea";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="wrap-register__content">
      <div className="register__content">
        <div className="register__logo">
          <img src="./images/image6.svg" alt="#" />
        </div>

        <h3 className="register__title">REGISTER</h3>
        <div className="wrapper-form">
          <div className="wrapper-company">
            <InputForm
              img={"/images/Email.svg"}
              placeholder={"Company Name"}
              type={"text"}
              id={"companyname"}
            />
            <Textarea
              img={"/images/address.svg"}
              placeholder={"Company Address"}
              type={"text"}
              id={"companyaddress"}
            />
          </div>

          <h3 className="owner">Owner</h3>
          <div className="wrapper-personal">
            <InputForm
              img={"/images/Email.svg"}
              placeholder={"Email"}
              type={"email"}
              id={"email"}
            />
            <InputForm
              img={"/images/Email.svg"}
              placeholder={"First Name"}
              type={"text"}
              id={"firstname"}
            />
            <InputForm
              img={"/images/user.svg"}
              placeholder={"Last Name"}
              type={"text"}
              id={"lastname"}
            />
            <InputForm
              img={"/images/phone.svg"}
              placeholder={"Phone Number"}
              type={"number"}
              id={"phone"}
            />
            <InputForm
              img={"/images/key.svg"}
              placeholder={"Password"}
              eyes={"images/eye off.svg"}
              type={"password"}
              id={"password"}
            />
            <InputForm
              img={"/images/key.svg"}
              placeholder={"Confirm Password"}
              eyes={"images/eye off.svg"}
              type={"password"}
              id={"confirm"}
            />
          </div>

          <div className="wrapper-btn">
            <button>REGISTER</button>
          </div>

          <div className="navigate-login">
            <p>I have an account.</p>
            <span>
              <Link to="/login">Login Now.</Link>
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

export default Register;
