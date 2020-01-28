import { combineReducers, configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import foodsReducer from "../features/foods/foods.slice";
import ratingsReducer from "../features/ratings/ratings.slice";

const rootReducer = combineReducers({
  foods: foodsReducer,
  ratings: ratingsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
