import { connect } from "react-redux";
import { getEmployeeAction } from "../../store/modules/employee/actions";
import { Employees as Component } from "./EmployeeView";
import { RootState } from "../../store";

export const EmployeeView = connect(
  (state: RootState) => ({
    employee: state.employee,
  }),
  (dispatch) => ({
    getEmployeesAction: () => dispatch(getEmployeeAction() as any),
  })
)(Component);
