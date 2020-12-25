import React, { useState, useContext, useEffect } from "react";

import { authDriver } from "../drivers/restDrivers.js";

const authContext = React.createContext();

export const useAuthContext = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
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
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
