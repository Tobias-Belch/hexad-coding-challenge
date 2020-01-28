import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { Food, FoodsResult, getFoods } from "../../api/food.api";

interface FoodsState {
  foods: Food[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FoodsState = {
  foods: [],
  isLoading: false,
  error: null
};

const foodsSlice = createSlice({
  name: "foods",
  initialState: initialState,
  reducers: {
    getFoodsStart(state: FoodsState) {
      state.isLoading = true;
    },
    getFoodsSuccess(
      state: FoodsState,
      { payload }: PayloadAction<FoodsResult>
    ) {
      state.foods = [...state.foods, ...payload];
      state.isLoading = false;
      state.error = null;
    },
    getFoodsFailure(state: FoodsState, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.isLoading = false;
    }
  }
});

export const {
  getFoodsStart,
  getFoodsSuccess,
  getFoodsFailure
} = foodsSlice.actions;

export default foodsSlice.reducer;

export const fetchFoods = (
  org: string,
  repo: string,
  number: number
): AppThunk => async dispatch => {
  try {
    dispatch(getFoodsStart());
    const foods = await getFoods();
    dispatch(getFoodsSuccess(foods));
  } catch (err) {
    dispatch(getFoodsFailure(err.toString()));
  }
};
