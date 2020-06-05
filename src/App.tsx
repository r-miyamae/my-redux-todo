import React from "react";
import { Provider } from "react-redux";
import { CounterView } from "./pages/CounterView";
import { EmployeeView } from "./pages/EmployeeView";
import "./App.css";
import { configureStore } from "./store";

const App: React.FunctionComponent = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <CounterView />
      <EmployeeView />
    </Provider>
  );
};

export default App;
