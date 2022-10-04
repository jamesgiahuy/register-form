import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import detailReducer from "./detailSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    detail: detailReducer,
  },
});
