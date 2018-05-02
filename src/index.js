import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  window.store = store; // for testing, remove when prod

  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
  registerServiceWorker();
});
