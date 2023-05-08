import { createSlice } from "@reduxjs/toolkit";

const followingSlice = createSlice({
  name: "following",
  initialState: { followingUsers: [] },

  reducers: {
    addFollowing(state, action) {
      state.followingUsers.push(action.payload);
    },
    removeFollowing(state, action) {
      state.followingUsers = state.followingUsers.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { addFollowing, removeFollowing } = followingSlice.actions;
export const followReducer = followingSlice.reducer;
