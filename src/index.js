import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/Store";
import ContextApi from "./components/apis/ContextApi";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextApi>
      <App />
    </ContextApi>
  </Provider>
);
