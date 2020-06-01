import { increment, decrement, add } from "../../store/modules/couter/actions";
import { CounterView as Component } from "./CounterView";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    add: (num) => dispatch(add(num)),
  };
};

export const CounterView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
