import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RatingsState = { [id: string]: number };

interface RatingActionPayload {
  id: string;
}

const initialState: RatingsState = {};

const ratingsSlice = createSlice({
  name: "ratings",
  initialState: initialState,
  reducers: {
    decreaseRating(
      state: RatingsState,
      { payload }: PayloadAction<RatingActionPayload>
    ) {
      const { id } = payload;
      if (!state[id]) {
        state[id] = 0;
      }
      state[id] = state[id] - 1;
    },
    increaseRating(
      state: RatingsState,
      { payload }: PayloadAction<RatingActionPayload>
    ) {
      const { id } = payload;
      if (!state[id]) {
        state[id] = 0;
      }
      state[id] = state[id] + 1;
    }
  }
});

export const { decreaseRating, increaseRating } = ratingsSlice.actions;

export default ratingsSlice.reducer;
