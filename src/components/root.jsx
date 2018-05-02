import React from "react";
import { Provider } from "react-redux";

import App from "../App";
// Base for our components and ready for routing
const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
