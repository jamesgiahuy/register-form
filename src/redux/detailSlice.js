import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    users: {
      detailUser: null,
      isFetching: false,
      error: false,
    },
  },

  //action cập nhật lại state
  reducers: {
    getDetailStart: (state) => {
      state.users.isFetching = true;
    },
    getDetailSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.detailUser = action.payload;
    },
    getDetailFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
  },
});

export const { getDetailStart, getDetailSuccess, getDetailFailed } =
  detailSlice.actions;

export default detailSlice.reducer;
