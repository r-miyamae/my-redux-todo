import { Domain } from "../../../../client/type";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { getEmployeesAction } from "../actions/index";

export type EmployeeState = {
  requesting: boolean;
  success: boolean;
  failed: boolean;
  employees: Domain.Employee[];
};

const initialState: EmployeeState = {
  requesting: false,
  success: false,
  failed: false,
  employees: [],
};

export const employeeReducer = reducerWithInitialState(initialState)
  .case(getEmployeesAction.started, (state) => ({
    ...state,
    requesting: true,
  }))
  .case(getEmployeesAction.done, (state, action) => ({
    ...state,
    requesting: false,
    employees: action.result,
  }))
  .case(getEmployeesAction.failed, (state) => ({
    ...state,
    requesting: false,
  }));
