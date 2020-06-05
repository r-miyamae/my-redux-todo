import { INCREMENT, DECREMENT, ADD, CounterActions } from "../actions";

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

export function counterReducer(
  state: CounterState = initialState,
  action: CounterActions
) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: ++state.count,
      };
    case DECREMENT:
      return {
        ...state,
        count: --state.count,
      };
    case ADD:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
}
