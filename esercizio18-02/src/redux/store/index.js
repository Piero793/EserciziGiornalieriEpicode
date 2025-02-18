import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favoriteReducer";
import resultReducer from "../reducers/resultReducer";

const rootReducers = combineReducers({
  favorite: favoriteReducer,
  results: resultReducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
