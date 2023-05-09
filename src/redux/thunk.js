import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://6457a2680c15cb14820d309d.mockapi.io";

export const getUsersThunk = createAsyncThunk(
  "Users/get",
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/Users`, {
        params: {
          page,
          limit,
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
