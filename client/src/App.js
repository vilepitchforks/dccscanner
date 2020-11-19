import React from "react";

import { useAuthContext } from "./lib/context/context.js";

import Login from "./components/Login/Login.js";
import Scan from "./components/Scan/Scan.js";
import Spnr from "./components/Spinner/Spinner.js";

const App = () => {
  const { auth } = useAuthContext();

  if (auth === "yes") {
    return <Scan />;
  } else if (auth === "no") {
    return <Login />;
  } else {
    return <Spnr />;
  }
};

export default App;
