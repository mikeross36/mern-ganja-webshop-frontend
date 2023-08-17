import * as authReducers from "./reducers/authReducers";
import * as ganjaReducers from "./reducers/ganjaReducers";
import * as orderReducers from "./reducers/orderReducers";
import * as categoryReducers from "./reducers/categoryReducers";
import { shoppingCartReducer } from "./reducers/shoppingCartReducers";
import { addReviewReducer } from "./reducers/reviewReducers";
import { updateUserAccountReducer } from "./reducers/userReducers";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  registerUser: authReducers.registerUserReducer,
  loginUser: authReducers.loginUserReducer,
  logoutUser: authReducers.logoutUserReducer,
  resetPassword: authReducers.resetPasswordReducer,
  updatePassword: authReducers.updatePasswordReducer,
  getAllGanjas: ganjaReducers.getAllGanjasReducer,
  getGanja: ganjaReducers.getGanjaReducer,
  shoppingCart: shoppingCartReducer,
  addReview: addReviewReducer,
  createOrder: orderReducers.createOrderReducer,
  getUserOrders: orderReducers.getUserOrdersReducer,
  getAllCategories: categoryReducers.getAllCategoriesReducer,
  getCategory: categoryReducers.getCategoryReducer,
  updateUserAccount: updateUserAccountReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USER_REQUEST") {
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
