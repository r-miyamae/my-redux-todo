import { combineReducers } from "redux";
import { counterReducer } from "./modules/couter/reducers";

export const createRootReducer = () =>
  combineReducers({
    counter: counterReducer,
  });
