import React, { useState } from "react";

import { useCustomContext } from "../../lib/context/context.js";
import { authDriver } from "../../lib/driver/driver.js";

const Login = () => {
  const [email, setEmail] = useState("");

  const { setAuth } = useCustomContext();

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();

        const auth = await authDriver({ email });

        if (auth) setAuth(true);
      }}
    >
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        onInput={e => setEmail(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Login;
