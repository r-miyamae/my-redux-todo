import { getEmployees } from "../../../../client";
import { Action } from "redux";
import { Domain } from "../../../../client/type";
import { ThunkAction } from "../../../type";

export const GET_EMPLOYEE_START = "GET_EMPLOYEE_START";
export const GET_EMPLOYEE_SUCCESS = "GET_EMPLOYEE_SUCCESS";
export const GET_EMPLOYEE_FAILED = "GET_EMPLOYEE_FAILED";

interface GetEmployeesStart extends Action {
  type: typeof GET_EMPLOYEE_START;
}
const getEmployeesStart = (): GetEmployeesStart => ({
  type: GET_EMPLOYEE_START,
});

interface GetEmployeesSuccess extends Action {
  type: typeof GET_EMPLOYEE_SUCCESS;
  payload: Domain.Employee[];
}
const getEmployeesSuccess = (
  payload: Domain.Employee[]
): GetEmployeesSuccess => ({
  type: GET_EMPLOYEE_SUCCESS,
  payload,
});

interface GetEmployeesFailed extends Action {
  type: typeof GET_EMPLOYEE_FAILED;
}
const getEmployeesFaild = (): GetEmployeesFailed => ({
  type: GET_EMPLOYEE_FAILED,
});

export function getEmployeeAction(): ThunkAction<void, any> {
  return async (dispatch) => {
    dispatch(getEmployeesStart());
    try {
      const res = await getEmployees();
      dispatch(getEmployeesSuccess(res.data.data));
    } catch (e) {
      dispatch(getEmployeesFaild());
    }
  };
}

export type EmployeeActions =
  | GetEmployeesStart
  | GetEmployeesSuccess
  | GetEmployeesFailed;
