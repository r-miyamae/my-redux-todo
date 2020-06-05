import { increment, decrement, add } from "../../store/modules/couter/actions";
import { CounterView as Component } from "./CounterView";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../store";

const mapStateToProps = (state: RootState) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    add: (num: number) => dispatch(add(num)),
  };
};

export const CounterView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
