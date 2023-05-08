import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://6457a2680c15cb14820d309d.mockapi.io";

axios.interceptors.request.use((request) => {
  return request;
});

export const getUsersThunk = createAsyncThunk(
  "Users/get",
  async ({ page, limit }) => {
    const offset = page * limit;
    const { data } = await axios.get(`/Users?limit=${limit}&offset=${offset}`);
    console.log(data);
    return data;
  }
);
