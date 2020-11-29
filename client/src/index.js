import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import AuthContextProvider from "./lib/context/authCcontext.js";
import  store from "./lib/state/store/Store.js";

import App from "./App";

ReactDOM.render(
  <AuthContextProvider>
    <React.StrictMode>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </React.StrictMode>
  </AuthContextProvider>,
  document.getElementById("root")
);
