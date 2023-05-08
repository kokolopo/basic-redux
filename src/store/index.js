import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productsReducer from "../slices/recipeSlice";
import detailSlice from "../slices/detailSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    recipes: productsReducer,
    detail: detailSlice,
  },
});
