import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk } from "./thunk";

const handelFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handelRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handelPending = (state) => {
  state.isLoading = true;
};

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.fulfilled, handelFulfilledGet)
      .addCase(getUsersThunk.pending, handelPending)
      .addCase(getUsersThunk.rejected, handelRejected);
  },
});

export const usersReducer = usersSlice.reducer;
