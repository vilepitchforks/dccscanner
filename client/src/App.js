import * as React from "react";

import { useAuthContext } from "./lib/context/context.js";

import Routes from "./Router";

import Login from "./components/Login/Login.js";
import Spnr from "./components/Spinner/Spinner.js";

const App = () => {
  const { auth } = useAuthContext();

  if (auth === "yes") {
    return <Routes />;
  } else if (auth === "no") {
    return <Login />;
  } else {
    return <Spnr />;
  }
};

export default App;
