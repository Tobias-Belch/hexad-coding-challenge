import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Rating {
  id: string;
  rating: number;
}

type RatingsState = { [id: string]: Rating };

interface RatingActionPayload {
  id: string;
}

const ratingsSlice = createSlice({
  name: "ratings",
  initialState: {},
  reducers: {
    decreaseRating(
      state: RatingsState,
      { payload }: PayloadAction<RatingActionPayload>
    ) {
      const { id } = payload;
      if (!state[id]) {
        state[id] = { id, rating: 0 };
      }
      state[id].rating = state[id].rating - 1;
    },
    increaseRating(
      state: RatingsState,
      { payload }: PayloadAction<RatingActionPayload>
    ) {
      const { id } = payload;
      if (!state[id]) {
        state[id] = { id, rating: 0 };
      }
      state[id].rating = state[id].rating + 1;
    }
  }
});

export const { decreaseRating, increaseRating } = ratingsSlice.actions;

export default ratingsSlice.reducer;
