import { connect } from "react-redux";
import { getEmployees } from "../../store/modules/employee/actions";
import { Employees as Component } from "./EmployeeView";
import { RootState } from "../../store";

export const EmployeeView = connect(
  (state: RootState) => ({
    employee: state.employee,
  }),
  (dispatch) => ({
    getEmployees: () => dispatch(getEmployees() as any),
  })
)(Component);
