import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";
import { getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://rxdn-hub-qa.opusasia.io/api/v1/pharmacy/login",
      user
    );
    dispatch(loginSuccess(res.data));
    const { access_token, expired_at } = res.data.data;
    console.log(access_token);
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("expired_at", expired_at);
    navigate("/order");
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const getAllUsers = async (acessToken, dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get(
      "https://rxdn-hub-qa.opusasia.io/api/v1/pharmacy/orders?start_date=1656835020000&end_date=1659513420000",
      {
        headers: { AUTH_TOKEN: `${acessToken}` },
      }
    );
    dispatch(getUsersSuccess(res.data)); //gửi action và payload
  } catch (error) {
    // console.log(error);
    dispatch(getUsersFailed());
  }
};
