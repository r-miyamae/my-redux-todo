import { getEmployees } from "../../../../client";

export const GET_EMPLOYEE_START = "GET_EMPLOYEE_START";
export const GET_EMPLOYEE_SUCCESS = "GET_EMPLOYEE_SUCCESS";
export const GET_EMPLOYEE_FAILED = "GET_EMPLOYEE_FAILED";

const getEmployeeStart = () => ({
  type: GET_EMPLOYEE_START,
});

const getEmployeeSuccess = (payload) => ({
  type: GET_EMPLOYEE_SUCCESS,
  payload,
});

const getEmployeesFaild = () => ({
  type: GET_EMPLOYEE_FAILED,
});

export function getEmployeeAction() {
  return async (dispatch) => {
    dispatch(getEmployeeStart());
    try {
      const res = await getEmployees();
      dispatch(getEmployeeSuccess(res.data.data));
    } catch (e) {
      dispatch(getEmployeesFaild());
    }
  };
}
