import { connect } from "react-redux";
import { getEmployeeAction } from "../../store/modules/employee/actions";
import { Employees as Component } from "./EmployeeView";

export const EmployeeView = connect(
  (state) => ({
    employee: state.employee,
  }),
  (dispatch) => ({
    getEmployeesAction: () => dispatch(getEmployeeAction()),
  })
)(Component);
