import Router from "next/router";
import { useState } from "react";
import { authDriver } from "../lib/drivers/restDrivers";

const login = () => {
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setCheck("");

    const auth = await authDriver({ email });

    if (auth) {
      // Redirect to "/" after successfull login
      Router.replace("/");
    } else {
      setCheck("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <div>@</div>
        </div>
        <input
          required
          name="email"
          type="email"
          placeholder="Email"
          onInput={e => setEmail(e.target.value)}
        />
        <div>
          <button type="submit">Enter</button>
        </div>
        <div>{check}</div>
      </div>
    </form>
  );
};

export default login;
