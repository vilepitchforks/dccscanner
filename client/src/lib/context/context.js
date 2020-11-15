import React, { useState, useContext, useEffect } from "react";

import { authDriver } from "../../lib/driver/driver.js";

const Context = React.createContext();

export const useCustomContext = () => useContext(Context);

const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState("");

  useEffect(() => {
    (async () => {
      const res = await authDriver({});
      if (res) {
        setAuth("yes");
      } else {
        setAuth("no");
      }
    })();
  }, []);

  return (
    <Context.Provider value={{ auth, setAuth }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
