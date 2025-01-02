// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";  // Import your Redux store

ReactDOM.render(
  <Provider store={store}>  {/* Wrap your app with the Provider */}
    <App />
  </Provider>,
  document.getElementById("root")
);
