import { INCREMENT, DECREMENT, ADD } from "../actions";

const initialState = {
  count: 0,
};

export function counterReducer(state = initialState, action) {
  console.log(state);
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
