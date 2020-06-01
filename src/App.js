import React from "react";
import { Provider } from "react-redux";
import { CounterView } from "./pages/CounterView";
import "./App.css";
import { configureStore } from "./store";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <CounterView />
    </Provider>
  );
}

export default App;
