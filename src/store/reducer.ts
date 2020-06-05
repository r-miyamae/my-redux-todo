import { combineReducers } from "redux";
import { counterReducer } from "./modules/couter/reducers";
import { employeeReducer } from "./modules/employee/reducers/index";

export const createRootReducer = () =>
  combineReducers({
    counter: counterReducer,
    employee: employeeReducer,
  });
