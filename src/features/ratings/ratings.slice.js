import { createSlice } from "@reduxjs/toolkit";

const ratingsSlice = createSlice({
  name: "ratings",
  initialState: {},
  reducers: {
    decreaseRating(state, action) {
      const { id } = action.payload;
      if (!state[id]) {
        state[id] = { id, rating: 0 };
      }
      state[id].rating = state[id].rating - 1;
    },
    increaseRating(state, action) {
      const { id } = action.payload;
      if (!state[id]) {
        state[id] = { id, rating: 0 };
      }
      state[id].rating = state[id].rating + 1;
    }
  }
});

export const { decreaseRating, increaseRating } = ratingsSlice.actions;

export default ratingsSlice.reducer;
