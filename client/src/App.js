import React from "react";

import { useCustomContext } from "./lib/context/context.js";

import Login from "./components/Login/Login.js";
import Ollo from "./components/Ollo/Ollo.js";

const App = () => {
  const { auth } = useCustomContext();

  if (auth === "yes") {
    return <Ollo />;
  } else if (auth === "no") {
    return <Login />;
  } else {
    return <p>Loading...</p>;
  }
};

export default App;
