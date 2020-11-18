import React from "react";

import { useAuthContext } from "./lib/context/context.js";

import Login from "./components/Login/Login.js";
import Scan from "./components/Scan/Scan.js";

const App = () => {
  const { auth } = useAuthContext();

  if (auth === "yes") {
    return <Scan />;
  } else if (auth === "no") {
    return <Login />;
  } else {
    return <p>Loading...</p>;
  }
};

export default App;
