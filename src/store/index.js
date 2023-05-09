import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productsReducer from "../slices/recipeSlice";
import detailSlice from "../slices/detailSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  recipes: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
    // counter: counterReducer,
    // recipes: productsReducer,
    detail: detailSlice,
    middleware: [thunk],
  },
});

export const persistor = persistStore(store);
