import { getEmployees as fetchEmployees } from "../../../../client";
import { ThunkAction } from "../../../type";
import { Response } from "../../../../client/type";
import actionCreatorFactory from "typescript-fsa";

type GetEmployeesParams = void;
type GetEmployeesSuccess = Response.GetEmployees;
type GetEmployeesFailed = Error;

const actionCreator = actionCreatorFactory("employee");

export const getEmployeesAction = actionCreator.async<
  GetEmployeesParams,
  GetEmployeesSuccess,
  GetEmployeesFailed
>("GET_EMPLOYEES");

export function getEmployees(): ThunkAction<void, any> {
  return async (dispatch) => {
    dispatch(getEmployeesAction.started());
    try {
      const res = await fetchEmployees();
      dispatch(
        getEmployeesAction.done({
          result: res.data.data,
        })
      );
    } catch (e) {
      dispatch(getEmployeesAction.failed(e));
    }
  };
}
