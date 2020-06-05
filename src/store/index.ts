import { createStore, applyMiddleware } from "redux";
import { createRootReducer } from "./reducer";
import thunk from "redux-thunk";

export function configureStore() {
  const middlewares = [thunk];
  const store = createStore(
    createRootReducer(),
    applyMiddleware(...middlewares)
  );
  return store;
}

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
